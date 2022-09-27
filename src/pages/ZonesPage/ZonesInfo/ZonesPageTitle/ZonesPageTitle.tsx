import cn from 'classnames';

import { PeriodSelector, SkeletonRectangle } from 'components';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { useZonesCount } from '../ZonesTable/useZonesCount';
import styles from './ZonesPageTitle.module.scss';

export function ZonesPageTitle() {
  const [selectedPeriod] = useSelectedPeriod(undefined);

  const isSmallTablet = useMediaQuery('(max-width: 630px)');

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
