import styles from './Card.module.scss';
import cn from 'classnames';
import { CardProps } from './Card.props';

function Card({ className, children, ...props }: CardProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
}

export { Card };
