import React, { ReactNode, useState } from 'react';

import cn from 'classnames';

import { ElementSize } from 'types/ElementSize';

import { Button } from '..';
import { ButtonType } from '../Button/Button.props';
import styles from './ButtonGroup.module.scss';
import { ButtonGroupItem, ButtonGroupProps } from './ButtonGroup.props';

export function ButtonGroup<T extends string>({
  buttons,
  className,
  children,
  isActive,
  setSelectedButton,
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
    <div className={cn(className, styles.container)} {...props}>
      {buttons &&
        buttons.map((buttonGroupItem: ButtonGroupItem<T>) => {
          const itemKey = buttonGroupItem?.key ? buttonGroupItem?.key : buttonGroupItem.title;
          const active = isActive ? isActive(itemKey as string) : selectedItemKey === itemKey;

          return (
            <Button
              className={cn(className, styles.item, {
                [styles.active]: active,
              })}
              key={itemKey}
              size={ElementSize.MEDIUM}
              buttonType={active ? ButtonType.PRIMARY : ButtonType.SECONDARY}
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
    });
  });
}
