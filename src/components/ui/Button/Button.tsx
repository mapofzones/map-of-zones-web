import cn from 'classnames';

import { ElementSize } from 'types/ElementSize';

import styles from './Button.module.scss';
import { ButtonProps, ButtonType } from './Button.props';

function Button({
  children,
  className,
  size = ElementSize.MEDIUM,
  buttonType = ButtonType.PRIMARY,
  Icon,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={cn(className, styles.button, {
        [styles.sm]: size === ElementSize.SMALL,
        [styles.md]: size === ElementSize.MEDIUM,
        [styles.lg]: size === ElementSize.LARGE,
        [styles.primary]: buttonType === ButtonType.PRIMARY,
        [styles.secondary]: buttonType === ButtonType.SECONDARY,
      })}
      {...props}
    >
      {Icon && <Icon className={styles.icon} />}
      {children && <span className={styles.content}>{children}</span>}
    </button>
  );
}

export { Button };
