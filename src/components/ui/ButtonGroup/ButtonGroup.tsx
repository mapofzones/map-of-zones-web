import React, { ReactNode } from 'react';

import cn from 'classnames';

import styles from './ButtonGroup.module.scss';
import { ButtonGroupProps } from './ButtonGroup.props';

export function ButtonGroup({
  className,
  children,
  isActive,
  ...props
}: ButtonGroupProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children &&
        React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (!React.isValidElement(child)) {
            return child;
          }
          return React.cloneElement(child, {
            className: cn(child.props.className, styles.item, {
              [styles.active]: isActive && isActive(child.key as string),
            }),
          });
        })}
    </div>
  );
}
