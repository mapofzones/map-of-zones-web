import { useState } from 'react';

import cn from 'classnames';

import { PeriodKeys } from 'components';
import { AnalysisCard } from 'components/AnalysisCard';
import { AnalysisCardActivityHeader } from 'components/AnalysisCardActivityHeader';
import { CompareGroup, MetadataItem } from 'components/CompareGroup';
import { NumberType } from 'types/NumberType';
import { Divider } from 'ui';

import styles from './ActivityComparisonCard.module.scss';
import {
  DauData,
  TransfersData,
  useZonesComprisonActivity,
  VolumeData,
} from './useZonesComparisonActivity';
import { useComparisonSelectedZones } from '../providers/ComparisonSelectedZonesProvider';

import { ActivityComparisonCardProps } from '.';

const VOLUME_METADATA: Record<keyof VolumeData, MetadataItem> = {
  ibcVolume: { title: 'IBC Volume' },
  ibcVolumeIn: { title: 'IBC In' },
  ibcVolumeOut: { title: 'IBC Out' },
};

const TRANSFERS_METADATA: Record<keyof TransfersData, MetadataItem> = {
  totalTxs: { title: 'Transactions' },
  ibcTransfers: { title: 'IBC Transfers' },
};

const DAU_METADATA: Record<keyof DauData, MetadataItem> = {
  dau: { title: 'Active Addresses' },
  ibcDau: { title: 'Active IBC Addresses' },
};

export function ActivityComparisonCard({ className }: ActivityComparisonCardProps): JSX.Element {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const { selectedZones, selectedZonesDetailsByKey } = useComparisonSelectedZones();

  const { data, loading } = useZonesComprisonActivity(selectedPeriod, selectedZones);

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCardActivityHeader
        selectedPeriod={selectedPeriod}
        onPeriodSelected={setSelectedPeriod}
      />

      <AnalysisCard.Body>
        <CompareGroup<VolumeData>
          data={data}
          metadata={VOLUME_METADATA}
          zonesDetailsByKey={selectedZonesDetailsByKey}
          loading={loading}
          numberType={NumberType.Currency}
        />

        <Divider size={24} />

        <CompareGroup<TransfersData>
          data={data}
          metadata={TRANSFERS_METADATA}
          zonesDetailsByKey={selectedZonesDetailsByKey}
          loading={loading}
          numberType={NumberType.Number}
        />

        <Divider size={24} />

        <CompareGroup<DauData>
          data={data}
          metadata={DAU_METADATA}
          zonesDetailsByKey={selectedZonesDetailsByKey}
          loading={loading}
          numberType={NumberType.Number}
        />
      </AnalysisCard.Body>
    </AnalysisCard>
  );
}
