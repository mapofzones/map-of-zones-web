import { useState } from 'react';

import cn from 'classnames';

import { PeriodSelector } from 'components';
import { Checkbox } from 'components/Checkbox';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { CompareButton } from 'pages/ZonesPage/ComparisonPage/CompareButton';
import { useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';
import { Button, ButtonSize, ButtonVariant, SkeletonRectangle } from 'ui';

import styles from './ZonesPageTitle.module.scss';
import { useZonesCount } from '../ZonesTable/useZonesCount';

export function ZonesPageTitle() {
  const [selectedPeriod] = useSelectedPeriod(undefined);

  const isSmallTablet = useTabletSmallMediaQuery();

  const { data: zonesCountData, loading: zonesCountLoading } = useZonesCount(selectedPeriod);

  const { isComparison } = useAppSelector((state) => state.zonesPageComparisonMode);
  const { switchCompareMode, resetZones } = useZonesPageComparisonModeActionsCreator();

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

      {!isComparison && <CompareButton onClick={() => switchCompareMode()} />}
      {isComparison && (
        <Button
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.LARGE}
          onClick={() => {
            switchCompareMode();
            resetZones();
          }}
        >
          Cancel
        </Button>
      )}

      <PeriodSelector className={styles.periodSelector} useDropdown={isSmallTablet} />
    </div>
  );
}
