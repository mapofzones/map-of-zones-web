import { ZoneInfoRowSkeleton } from './ZoneInfoRowSkeleton';
import styles from '../ZonesInfoTable.module.scss';

export function ZonesInfoTableSkeleton(): JSX.Element {
  return (
    <div className={styles.zonesInfoTable}>
      {Array(7)
        .fill(0)
        .map((_, index: number) => (
          <ZoneInfoRowSkeleton key={index} />
        ))}
    </div>
  );
}
