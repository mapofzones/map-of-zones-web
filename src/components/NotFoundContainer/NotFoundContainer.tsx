import cn from 'classnames';

import styles from './NotFoundContainer.module.scss';
import { NotFoundContainerProps } from './NotFoundContainer.props';

export function NotFoundContainer({ children, className }: NotFoundContainerProps) {
  return <div className={cn(className, styles.container)}>{children}</div>;
}
