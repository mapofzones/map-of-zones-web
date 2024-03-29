import cn from 'classnames';

import { PeriodSelector, SkeletonRectangle } from 'components';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './ZonesPageTitle.module.scss';
import { useZonesCount } from '../ZonesTable/useZonesCount';

export function ZonesPageTitle() {
  const [selectedPeriod] = useSelectedPeriod(undefined);

  const isSmallTablet = useTabletSmallMediaQuery();

  const { data: zonesCountData, loading: zonesCountLoading } = useZonesCount(selectedPeriod);

  return (
    <div className={styles.header}>
      {!zonesCountLoading && (
        <div className={styles.titleContainer}>
          <span className={styles.title}>{zonesCountData?.allZonesCount} Zones</span>
          <span className={styles.subtitle}>
            {zonesCountData?.activeZonesCount} Active ({selectedPeriod})
          </span>
        </div>
      )}

      {zonesCountLoading && (
        <div className={styles.titleContainer}>
          <SkeletonRectangle className={cn(styles.title, styles.skeleton)} />
        </div>
      )}

      <PeriodSelector useDropdown={isSmallTablet} />
    </div>
  );
}
