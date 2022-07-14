// TODO: fix lint errors
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import styles from './Status.module.scss';

const STATUS_ICON_COLOR_BY_ZONE = {
  undefined: '#FF4455',
  null: '#FF4455',
  true: '#66DD55',
  false: '#FF9900',
};

const STATUS_TITLE_BY_ZONE = {
  null: 'Indirectly obtained data',
  true: 'Connected & Up to date',
  false: 'Synchronizing',
};

export default function Status({ isZoneUpToDate }) {
  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <div
          style={{ background: STATUS_ICON_COLOR_BY_ZONE[isZoneUpToDate] }}
          className={styles.iconBackground}
        />
        <div
          style={{ background: STATUS_ICON_COLOR_BY_ZONE[isZoneUpToDate] }}
          className={styles.icon}
        />
      </div>
      <div className={styles.tooltip}>{STATUS_TITLE_BY_ZONE[isZoneUpToDate]}</div>
    </div>
  );
}
