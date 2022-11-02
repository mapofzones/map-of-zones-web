import { Tooltip, StatusCircle } from 'components';

import styles from './ZoneStatus.module.scss';
import { ZoneStatusProps } from './ZoneStatus.props';

const STATUS_TITLE_BY_ZONE: Record<string, { text: string; width: number }> = {
  default: {
    text: 'Indirectly obtained data',
    width: 152,
  },
  true: {
    text: 'Connected & Up to date',
    width: 152,
  },
  false: {
    text: 'Synchronizing',
    width: 100,
  },
};

export function ZoneStatus({ className, status }: ZoneStatusProps) {
  const parsedStatus = typeof status === 'boolean' ? `${status}` : 'default';

  const { text, width } = STATUS_TITLE_BY_ZONE[parsedStatus];

  return (
    <div className={styles.container}>
      <Tooltip
        className={styles.tooltip}
        hoverElement={<StatusCircle className={className} status={status} />}
        width={width}
      >
        {text}
      </Tooltip>
    </div>
  );
}
