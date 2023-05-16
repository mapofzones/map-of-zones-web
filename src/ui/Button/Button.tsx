import { forwardRef } from 'react';

import cn from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.props';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      size,
      variant: buttonType,
      IconBefore,
      IconAfter,
      ...props
    }: ButtonProps,
    ref
  ): JSX.Element => {
    console.log(props);
    return (
      <button
        type="button"
        ref={ref}
        className={cn(className, styles.button, {
          [styles.sm]: size === ButtonSize.SMALL,
          [styles.md]: size === ButtonSize.MEDIUM,
          [styles.lg]: size === ButtonSize.LARGE,
          [styles.primary]: buttonType === ButtonVariant.PRIMARY,
          [styles.secondary]: buttonType === ButtonVariant.SECONDARY,
        })}
        disabled={disabled}
        {...props}
      >
        {IconBefore && <IconBefore className={cn(styles.icon, styles.leftIcon)} />}
        {children}
        {IconAfter && <IconAfter className={cn(styles.icon, styles.rightIcon)} />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
