import { useState } from 'react';

import cn from 'classnames';
import { useParams } from 'react-router-dom';

import { PeriodKeys } from 'components';
import { OverviewCard } from 'components/OverviewCard/OverviewCard';
import { useZoneOverviewActivity } from 'pages/ZonesPage/ZonePage/ZoneOverview/ZoneOverviewActivity/useZoneOverviewActivity';
import { ZoneOverviewActivityHeader } from 'pages/ZonesPage/ZonePage/ZoneOverview/ZoneOverviewActivity/ZoneOverviewActivityHeader/ZoneOverviewActivityHeader';

import styles from './ActivityComparisonCard.module.scss';
import { VolumeComparisonGroup } from './VolumeComparisonGroup';

import { ActivityComparisonCardProps } from '.';

export function ActivityComparisonCard({ className }: ActivityComparisonCardProps): JSX.Element {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const { data, loading } = useZoneOverviewActivity(selectedPeriod, 'osmosis-1');

  return (
    <OverviewCard className={cn(className, styles.container)}>
      <ZoneOverviewActivityHeader
        selectedPeriod={selectedPeriod}
        onPeriodSelected={setSelectedPeriod}
      />

      <OverviewCard.Body>
        <OverviewCard.Body.Group>
          <VolumeComparisonGroup />
        </OverviewCard.Body.Group>
      </OverviewCard.Body>
    </OverviewCard>
  );
}
