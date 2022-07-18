// TODO: fix lint error
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import cn from 'classnames';

import { Tooltip } from 'components';

import styles from './ZoneStatus.module.scss';
import { ZoneStatusProps } from './ZoneStatus.props';

const STATUS_ICON_COLOR_BY_ZONE = {
  undefined: '#FF4455',
  null: '#FF4455',
  true: '#66DD55',
  false: '#FF9900',
};

const STATUS_TITLE_BY_ZONE = {
  undefined: 'Indirectly obtained data',
  null: 'Indirectly obtained data',
  true: 'Connected & Up to date',
  false: 'Synchronizing',
};

export function ZoneStatus({ className, status }: ZoneStatusProps) {
  return (
    <div className={styles.container}>
      <div className={cn(styles.status, className)}>
        <div
          style={{ background: STATUS_ICON_COLOR_BY_ZONE[status] }}
          className={styles.iconBackground}
        />
        <div style={{ background: STATUS_ICON_COLOR_BY_ZONE[status] }} className={styles.icon} />
      </div>
      <Tooltip className={styles.tooltip} text={STATUS_TITLE_BY_ZONE[status]} />
    </div>
  );
}
