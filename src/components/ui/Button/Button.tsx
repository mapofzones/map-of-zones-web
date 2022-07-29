import cn from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

function Button({ children, className, Icon, ...props }: ButtonProps): JSX.Element {
  return (
    <button type="button" className={cn(className, styles.button)} {...props}>
      {Icon && <Icon className={styles.icon} />}
      {children && <span className={styles.content}>{children}</span>}
    </button>
  );
}

export { Button };
