import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

function Button({ children, className, Icon, ...props }: ButtonProps): JSX.Element {
  return (
    <button type="button" className={cn(className, styles.button)} {...props}>
      {Icon && <span className={styles.icon}>{<Icon />}</span>}
      {children}
    </button>
  );
}

export { Button };
