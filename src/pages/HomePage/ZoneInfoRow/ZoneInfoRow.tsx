import { PendingIcon } from '../../../icons';
import cn from 'classnames';
import styles from './ZoneInfoRow.module.scss';
import { ZonesInfoRowProps } from './ZoneInfoRow.props';
import { NumberFormat } from '../../../components';

function ZoneInfoRow({ data, numberType, className, ...props }: ZonesInfoRowProps): JSX.Element {
  return (
    <div className={cn(styles.row, className)} {...props}>
      <div className={styles.logoContainer}>
        {data.logoUrl && (
          <img className={styles.logo} src={data.logoUrl} alt={`${data.name} logo`} />
        )}
      </div>
      <span className={styles.name}>{data.name}</span>
      <span className={styles.value}>
        <NumberFormat value={data.value} numberType={numberType} />
      </span>
      {data.pendingValue != null && (
        <span className={styles.pendingValueContainer}>
          <PendingIcon />
          <span className={styles.pendingValue}>
            <NumberFormat value={data.pendingValue} numberType={numberType} />
          </span>
        </span>
      )}
    </div>
  );
}

export { ZoneInfoRow };
