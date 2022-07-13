import cn from 'classnames';

import styles from './Card.module.scss';
import { CardProps } from './Card.props';

function Card({ className, children, hasBorder = false, ...props }: CardProps): JSX.Element {
  return (
    <div className={cn(className, styles.container, { [styles.hasBorder]: hasBorder })} {...props}>
      {children}
    </div>
  );
}

export { Card };
