import cn from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps, ButtonSize } from './Button.props';

function Button({
  children,
  className,
  size = ButtonSize.SMALL,
  Icon,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={cn(className, styles.button, {
        [styles.small]: size === ButtonSize.SMALL,
        [styles.medium]: size === ButtonSize.MEDIUM,
        [styles.large]: size === ButtonSize.LARGE,
      })}
      {...props}
    >
      {Icon && <Icon className={styles.icon} />}
      {children && <span className={styles.content}>{children}</span>}
    </button>
  );
}

export { Button };
