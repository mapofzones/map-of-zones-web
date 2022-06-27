import { NumberFormat } from '../../../components/NumberFormat/NumberFormat';
import { PendingIcon } from '../../../icons';
import styles from './ZoneInfoRow.module.scss';

function ZoneInfoRow({ data, numberType }: any): JSX.Element {
  return (
    <div className={styles.row}>
      <div className={styles.logoContainer}>
        {data.logoUrl ? (
          <img className={styles.logo} src={data.logoUrl} alt={`${data.name} logo`} />
        ) : (
          <div className={styles.emptyLogo} />
        )}
      </div>
      <span className={styles.name}>{data.name}</span>
      <span className={styles.value}>
        <NumberFormat value={data.value} type={numberType} />
      </span>
      <span className={styles.pendingValueContainer}>
        <PendingIcon />
        <span className={styles.pendingValue}>
          <NumberFormat value={data.pendingValue} type={numberType} />
        </span>
      </span>
    </div>
  );
}

export { ZoneInfoRow };
