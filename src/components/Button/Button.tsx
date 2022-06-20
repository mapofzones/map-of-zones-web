import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

function Button({ children, className, icon, ...props }: any): JSX.Element {
  // console.log(icon);
  return (
    <button type="button" className={cn(styles.button, className)} {...props}>
      {icon}
      {children}
    </button>
  );
}

export default Button;
