import cn from 'classnames';

import styles from './StatusCircle.module.scss';
import { StatusCircleProps } from './StatusCircle.props';

const COLOR_BY_STATUS: Record<string, string> = {
  default: '#FF4455',
  true: '#66DD55',
  false: '#FF9900',
};

export function StatusCircle({ className, status }: StatusCircleProps) {
  const parsedStatus = typeof status === 'boolean' ? `${status}` : 'default';

  return (
    <div className={cn(styles.status, className)}>
      <div
        style={{ backgroundColor: COLOR_BY_STATUS[parsedStatus] }}
        className={styles.iconBackground}
      />
      <div style={{ backgroundColor: COLOR_BY_STATUS[parsedStatus] }} className={styles.icon} />
    </div>
  );
}
