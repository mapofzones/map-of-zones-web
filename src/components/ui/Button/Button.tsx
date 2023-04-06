import cn from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.props';

function Button({
  children,
  className,
  size,
  variant: buttonType,
  IconBefore,
  IconAfter,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={cn(className, styles.button, {
        [styles.sm]: size === ButtonSize.SMALL,
        [styles.md]: size === ButtonSize.MEDIUM,
        [styles.lg]: size === ButtonSize.LARGE,
        [styles.primary]: buttonType === ButtonVariant.PRIMARY,
        [styles.secondary]: buttonType === ButtonVariant.SECONDARY,
      })}
      {...props}
    >
      {IconBefore && <IconBefore className={cn(styles.icon, styles.leftIcon)} />}
      {children}
      {IconAfter && <IconAfter className={cn(styles.icon, styles.rightIcon)} />}
    </button>
  );
}

export { Button };
