import styles from './Link.module.scss';
import { LinkProps } from './Link.props';

function Link({ children, className, Icon, ...props }: LinkProps): JSX.Element {
  return (
    <a className={className} {...props}>
      {Icon && <Icon className={styles.icon} />}
      {children}
    </a>
  );
}

export { Link };
