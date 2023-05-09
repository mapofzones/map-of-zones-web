import { useState } from 'react';

import cn from 'classnames';
import { useParams, useSearchParams } from 'react-router-dom';

import { Divider, NumberType, PeriodKeys } from 'components';
import { OverviewCard } from 'components/OverviewCard/OverviewCard';
import { ZoneOverviewActivityHeader } from 'pages/ZonesPage/ZonePage/ZoneOverview/ZoneOverviewActivity/ZoneOverviewActivityHeader/ZoneOverviewActivityHeader';

import styles from './ActivityComparisonCard.module.scss';
import { CompareGroup } from './CompareGroup';
import {
  DauData,
  TransfersData,
  useZonesComprisonActivity,
  VolumeData,
} from './hooks/useZonesComparisonActivity';

import { ActivityComparisonCardProps } from '.';

const COLORS = ['#62D0D7', '#B250FF', '#FF9900'];

const VOLUME_METADATA: Record<
  string,
  {
    title: string;
    property: keyof VolumeData;
  }
> = {
  ibcVolume: { title: 'IBC Volume', property: 'ibcVolume' },
  ibcVolumeIn: { title: 'IBC In', property: 'ibcVolumeIn' },
  ibcVolumeOut: { title: 'IBC Out', property: 'ibcVolumeOut' },
};

const TRANSFERS_METADATA: Record<
  string,
  {
    title: string;
    property: keyof TransfersData;
  }
> = {
  ibcVolumeIn: { title: 'Transactions', property: 'totalTxs' },
  ibcVolume: { title: 'IBC Transfers', property: 'ibcTransfers' },
};

const DAU_METADATA: Record<
  string,
  {
    title: string;
    property: keyof DauData;
  }
> = {
  ibcVolumeIn: { title: 'Active Addresses', property: 'dau' },
  ibcVolume: { title: 'Active IBC Addresses', property: 'ibcDau' },
};

export function ActivityComparisonCard({ className }: ActivityComparisonCardProps): JSX.Element {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const [search] = useSearchParams();
  const zonesStr = search.getAll('zones');
  console.log(zonesStr);

  const { zones, volumeData, transfersData, dauData, loading } = useZonesComprisonActivity(
    selectedPeriod,
    zonesStr
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
          colors={COLORS}
        />

        <Divider size={24} />

        <CompareGroup
          zones={zones}
          metadata={TRANSFERS_METADATA}
          data={transfersData}
          loading={loading}
          numberType={NumberType.Currency}
          colors={COLORS}
        />

        <Divider size={24} />

        <CompareGroup
          zones={zones}
          data={dauData}
          metadata={DAU_METADATA}
          loading={loading}
          numberType={NumberType.Currency}
          colors={COLORS}
        />
      </OverviewCard.Body>
    </OverviewCard>
  );
}
