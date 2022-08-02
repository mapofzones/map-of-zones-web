import cn from 'classnames';

import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.props';

export function Tooltip({ className, children }: TooltipProps) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
