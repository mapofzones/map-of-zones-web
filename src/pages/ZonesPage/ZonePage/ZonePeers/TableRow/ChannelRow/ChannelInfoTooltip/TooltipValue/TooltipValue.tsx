import cn from 'classnames';

import styles from './TooltipValue.module.scss';
import { TooltipValueProps } from './TooltipValue.props';

export function TooltipValue({ className, title, subtitle }: TooltipValueProps) {
  return (
    <div className={cn(styles.container, className)}>
      {title}
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
}
