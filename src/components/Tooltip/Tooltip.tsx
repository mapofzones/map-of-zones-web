import cn from 'classnames';

import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.props';

export function Tooltip({ className, text = '' }: TooltipProps) {
  return <div className={cn(styles.container, className)}>{text}</div>;
}
