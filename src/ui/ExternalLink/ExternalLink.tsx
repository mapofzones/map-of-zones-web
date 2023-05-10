import cn from 'classnames';

import styles from './ExternalLink.module.scss';
import { LinkProps } from './ExternalLink.props';

function ExternalLink({
  children,
  className,
  Icon,
  underlined = false,
  ...props
}: LinkProps): JSX.Element {
  return (
    <a
      className={cn(className, styles.link, { [styles.underlined]: underlined })}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {Icon && <Icon className={styles.icon} />}
      {children}
    </a>
  );
}

export { ExternalLink };
