import cn from 'classnames';

import { SkeletonTextWrapper, SkeletonCircle } from 'ui';

import styles from '../ZoneInfoRow/ZoneInfoRow.module.scss';

export function ZoneInfoRowSkeleton() {
  return (
    <div className={styles.row}>
      <div className={cn(styles.zoneBaseInfoContainer, styles.cell)}>
        <SkeletonCircle size={'32px'} />
        <SkeletonTextWrapper
          style={{ marginLeft: '16px' }}
          loading={true}
          defaultTextMinLength={10}
          defaultTextMaxLength={15}
        />
      </div>
      <div className={cn(styles.valueContainer, styles.cell)} style={{ width: '100px' }}>
        <SkeletonTextWrapper loading={true} defaultText={'$123,456,789'} />
      </div>
    </div>
  );
}
