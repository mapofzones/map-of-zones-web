import cn from 'classnames';

import { Tooltip } from 'components';

import styles from './ZoneStatus.module.scss';
import { ZoneStatusProps } from './ZoneStatus.props';

const STATUS_ICON_COLOR_BY_ZONE: Record<string, string> = {
  default: '#FF4455',
  true: '#66DD55',
  false: '#FF9900',
};

const STATUS_TITLE_BY_ZONE: Record<string, string> = {
  default: 'Indirectly obtained data',
  true: 'Connected & Up to date',
  false: 'Synchronizing',
};

export function ZoneStatus({ className, status }: ZoneStatusProps) {
  const parsedStatus = typeof status === 'boolean' ? `${status}` : 'default';

  return (
    <div className={styles.container}>
      <Tooltip className={styles.tooltip} body={STATUS_TITLE_BY_ZONE[parsedStatus]} maxWidth={160}>
        <div className={cn(styles.status, className)}>
          <div
            style={{ backgroundColor: STATUS_ICON_COLOR_BY_ZONE[parsedStatus] }}
            className={styles.iconBackground}
          />
          <div
            style={{ backgroundColor: STATUS_ICON_COLOR_BY_ZONE[parsedStatus] }}
            className={styles.icon}
          />
        </div>
      </Tooltip>
    </div>
  );
}
