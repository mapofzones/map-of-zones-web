import cn from 'classnames';

import styles from './ExternalLink.module.scss';
import { LinkProps } from './ExternalLink.props';

function Link({ children, className, Icon, ...props }: LinkProps): JSX.Element {
  return (
    <a className={cn(className, styles.link)} target="_blank" rel="noopener noreferrer" {...props}>
      {Icon && <Icon className={styles.icon} />}
      {children}
    </a>
  );
}

export { Link };
