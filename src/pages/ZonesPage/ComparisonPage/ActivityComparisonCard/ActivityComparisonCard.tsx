import { useState } from 'react';

import cn from 'classnames';

import { PeriodKeys } from 'components';
import { OverviewCard } from 'components/OverviewCard/OverviewCard';
import { ZoneOverviewActivityHeader } from 'pages/ZonesPage/ZonePage/ZoneOverview/ZoneOverviewActivity/ZoneOverviewActivityHeader/ZoneOverviewActivityHeader';
import { Divider, NumberType } from 'ui';

import styles from './ActivityComparisonCard.module.scss';
import { CompareGroup } from './CompareGroup';
import {
  DauData,
  TransfersData,
  useZonesComprisonActivity,
  VolumeData,
} from './hooks/useZonesComparisonActivity';
import { useComparisonSelectedZones } from '../context/ComparisonSelectedZonesProvider';

import { ActivityComparisonCardProps } from '.';

const VOLUME_METADATA: Record<
  keyof VolumeData,
  {
    title: string;
  }
> = {
  ibcVolume: { title: 'IBC Volume' },
  ibcVolumeIn: { title: 'IBC In' },
  ibcVolumeOut: { title: 'IBC Out' },
};

const TRANSFERS_METADATA: Record<
  keyof TransfersData,
  {
    title: string;
  }
> = {
  totalTxs: { title: 'Transactions' },
  ibcTransfers: { title: 'IBC Transfers' },
};

const DAU_METADATA: Record<
  keyof DauData,
  {
    title: string;
  }
> = {
  dau: { title: 'Active Addresses' },
  ibcDau: { title: 'Active IBC Addresses' },
};

export function ActivityComparisonCard({ className }: ActivityComparisonCardProps): JSX.Element {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const { zones: selectedZones } = useComparisonSelectedZones();

  const { zones, volumeData, transfersData, dauData, loading } = useZonesComprisonActivity(
    selectedPeriod,
    selectedZones
  );

  return (
    <OverviewCard className={cn(className, styles.container)}>
      <ZoneOverviewActivityHeader
        selectedPeriod={selectedPeriod}
        onPeriodSelected={setSelectedPeriod}
      />

      <OverviewCard.Body>
        <CompareGroup
          zones={zones}
          data={volumeData}
          metadata={VOLUME_METADATA}
          loading={loading}
          numberType={NumberType.Currency}
        />

        <Divider size={24} />

        <CompareGroup
          zones={zones}
          data={transfersData}
          metadata={TRANSFERS_METADATA}
          loading={loading}
          numberType={NumberType.Number}
        />

        <Divider size={24} />

        <CompareGroup
          zones={zones}
          data={dauData}
          metadata={DAU_METADATA}
          loading={loading}
          numberType={NumberType.Number}
        />
      </OverviewCard.Body>
    </OverviewCard>
  );
}
