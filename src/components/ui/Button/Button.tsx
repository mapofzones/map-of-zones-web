import cn from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps, ButtonSize, ButtonType } from './Button.props';

function Button({
  children,
  className,
  size,
  buttonType,
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
        [styles.primary]: buttonType === ButtonType.PRIMARY,
        [styles.secondary]: buttonType === ButtonType.SECONDARY,
      })}
      {...props}
    >
      {IconBefore && <IconBefore className={cn(styles.icon, styles.leftIcon)} />}
      {children && <span className={styles.content}>{children}</span>}
      {IconAfter && <IconAfter className={cn(styles.icon, styles.rightIcon)} />}
    </button>
  );
}

export { Button };
