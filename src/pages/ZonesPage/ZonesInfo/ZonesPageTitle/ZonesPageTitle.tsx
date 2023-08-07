import cn from 'classnames';

import { PeriodSelector } from 'components';
import { CompareModeSwitcher } from 'components/CompareModeSwitcher';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { SkeletonRectangle } from 'ui';

import styles from './ZonesPageTitle.module.scss';
import { useZonesCount } from '../ZonesTable/useZonesCount';

export function ZonesPageTitle() {
  const [selectedPeriod] = useSelectedPeriod(undefined);

  const isSmallTablet = useTabletSmallMediaQuery();
  const compareBtnText = isSmallTablet ? 'Compare' : 'Compare Zones';

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

      <CompareModeSwitcher text={compareBtnText} />

      <PeriodSelector className={styles.periodSelector} useDropdown={isSmallTablet} />
    </div>
  );
}
