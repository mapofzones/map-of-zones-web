import { Tooltip, StatusCircle } from 'components';

import styles from './ZoneStatus.module.scss';
import { ZoneStatusProps } from './ZoneStatus.props';

const STATUS_TITLE_BY_ZONE: Record<string, string> = {
  default: 'Indirectly obtained data',
  true: 'Connected & Up to date',
  false: 'Synchronizing',
};

export function ZoneStatus({ className, status }: ZoneStatusProps) {
  const parsedStatus = typeof status === 'boolean' ? `${status}` : 'default';

  return (
    <div className={styles.container}>
      <Tooltip
        className={styles.tooltip}
        hoverElement={<StatusCircle className={className} status={status} />}
        width={160}
      >
        {STATUS_TITLE_BY_ZONE[parsedStatus]}
      </Tooltip>
    </div>
  );
}
