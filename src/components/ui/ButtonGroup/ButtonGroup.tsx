import React, { ReactNode, useState } from 'react';

import cn from 'classnames';

import { ElementSize } from 'types/ElementSize';

import styles from './ButtonGroup.module.scss';
import { ButtonGroupItem, ButtonGroupProps } from './ButtonGroup.props';
import { Button } from '..';
import { ButtonSize, ButtonVariant } from '../Button/Button.props';

const elementSizeToButtonSizeMap = {
  [ElementSize.SMALL]: ButtonSize.SMALL,
  [ElementSize.MEDIUM]: ButtonSize.MEDIUM,
  [ElementSize.LARGE]: ButtonSize.LARGE,
};

export function ButtonGroup<T>({
  buttons,
  className,
  children,
  isActive,
  setSelectedButton,
  size = ElementSize.MEDIUM,
  ...props
}: ButtonGroupProps<T>): JSX.Element {
  const [selectedItemKey, setSelectedItemKey] = useState(
    buttons && buttons.length > 0 ? buttons[0].key ?? buttons[0].title : undefined
  );

  const onButtonItemClick = (item: ButtonGroupItem<T>) => {
    setSelectedButton?.(item);
    setSelectedItemKey(item.key ?? item.title);
  };

  return (
    <div
      className={cn(className, styles.container, {
        [styles.sm]: size === ElementSize.SMALL,
        [styles.md]: size === ElementSize.MEDIUM,
        [styles.lg]: size === ElementSize.LARGE,
      })}
      {...props}
    >
      {buttons &&
        buttons.map((buttonGroupItem: ButtonGroupItem<T>) => {
          const itemKey = buttonGroupItem?.key
            ? buttonGroupItem?.key?.toString()
            : buttonGroupItem.title
            ? buttonGroupItem.title
            : '';
          const active = isActive ? isActive(itemKey as string) : selectedItemKey === itemKey;

          return (
            <Button
              className={cn(styles.item, {
                [styles.active]: active,
              })}
              key={itemKey}
              size={elementSizeToButtonSizeMap[size]}
              IconBefore={buttonGroupItem.icon}
              variant={active ? ButtonVariant.PRIMARY : ButtonVariant.SECONDARY}
              onClick={() => onButtonItemClick(buttonGroupItem)}
            >
              {buttonGroupItem.title}
            </Button>
          );
        })}

      {children && MapChildren(children, isActive)}
    </div>
  );
}
function MapChildren(
  children: ReactNode,
  isActive: ((key: string) => boolean) | undefined
): ReactNode {
  return React.Children.map<ReactNode, ReactNode>(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    return React.cloneElement(child, {
      className: cn(child.props.className, styles.item, {
        [styles.active]: isActive && isActive(child.key as string),
      }),
    } as any);
  });
}
