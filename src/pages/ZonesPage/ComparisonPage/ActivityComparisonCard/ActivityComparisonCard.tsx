import { useState } from 'react';

import cn from 'classnames';
import { useParams, useSearchParams } from 'react-router-dom';

import { Divider, NumberType, PeriodKeys } from 'components';
import { OverviewCard } from 'components/OverviewCard/OverviewCard';
import { ZoneOverviewActivityHeader } from 'pages/ZonesPage/ZonePage/ZoneOverview/ZoneOverviewActivity/ZoneOverviewActivityHeader/ZoneOverviewActivityHeader';

import styles from './ActivityComparisonCard.module.scss';
import { useZonesComprisonActivity } from './hooks/useZonesComparisonActivity';
import { VolumeComparisonGroup } from './VolumeComparisonGroup';

import { ActivityComparisonCardProps } from '.';

const COLORS = ['#62D0D7', '#B250FF', '#FF9900'];

export function ActivityComparisonCard({ className }: ActivityComparisonCardProps): JSX.Element {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const [search] = useSearchParams();
  const zonesStr = search.getAll('zones');
  console.log(zonesStr);

  const { data, loading } = useZonesComprisonActivity(selectedPeriod, zonesStr);

  return (
    <OverviewCard className={cn(className, styles.container)}>
      <ZoneOverviewActivityHeader
        selectedPeriod={selectedPeriod}
        onPeriodSelected={setSelectedPeriod}
      />

      <OverviewCard.Body>
        <OverviewCard.Body.Group>
          <VolumeComparisonGroup
            data={data}
            loading={loading}
            numberType={NumberType.Currency}
            colors={COLORS}
          />

          <Divider size={24} />

          <VolumeComparisonGroup
            data={data}
            loading={loading}
            numberType={NumberType.Currency}
            colors={COLORS}
          />

          <Divider size={24} />

          <VolumeComparisonGroup
            data={data}
            loading={loading}
            numberType={NumberType.Currency}
            colors={COLORS}
          />
        </OverviewCard.Body.Group>
      </OverviewCard.Body>
    </OverviewCard>
  );
}
