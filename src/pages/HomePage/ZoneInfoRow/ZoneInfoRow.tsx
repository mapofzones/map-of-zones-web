import { PendingIcon } from '../../../icons';
import styles from './ZoneInfoRow.module.scss';

function ZoneInfoRow({ data }: any): JSX.Element {
  return (
    <div className={styles.row}>
      <div className={styles.logo}></div>
      <span className={styles.name}>{data.name}</span>
      <span className={styles.value}>{data.value}</span>
      <span className={styles.pendingValueContainer}>
        <PendingIcon />
        <span className={styles.pendingValue}>{data.pendingValue}</span>
      </span>
    </div>
  );
}

export { ZoneInfoRow };
