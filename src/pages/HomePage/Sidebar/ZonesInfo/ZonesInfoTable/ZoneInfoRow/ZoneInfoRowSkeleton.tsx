import { SkeletonTextWrapper, SkeletonCircle } from 'components';

import styles from './ZoneInfoRow.module.scss';

export function ZoneInfoRowSkeleton() {
  return (
    <div className={styles.row}>
      <div className={styles.zoneBaseInfoContainer}>
        <SkeletonCircle size={'32px'} />
        <SkeletonTextWrapper
          style={{ marginLeft: '16px' }}
          loading={true}
          defaultTextMinLength={10}
          defaultTextMaxLength={15}
        />
      </div>
      <div className={styles.valueContainer}>
        <SkeletonTextWrapper loading={true} defaultText={'$123,456,789'} />
      </div>
    </div>
  );
}
