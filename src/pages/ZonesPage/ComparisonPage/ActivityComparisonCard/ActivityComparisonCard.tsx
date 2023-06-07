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
  ibcVolume: { title: 'IBC Volume', numberType: NumberType.Currency },
  ibcVolumeIn: { title: 'IBC In', numberType: NumberType.Currency },
  ibcVolumeOut: { title: 'IBC Out', numberType: NumberType.Currency },
};

const TRANSFERS_METADATA: Record<keyof TransfersData, MetadataItem> = {
  totalTxs: { title: 'Transactions', numberType: NumberType.Number },
  ibcTransfers: { title: 'IBC Transfers', numberType: NumberType.Number },
};

const DAU_METADATA: Record<keyof DauData, MetadataItem> = {
  dau: { title: 'Active Addresses', numberType: NumberType.Number },
  ibcDau: { title: 'Active IBC Addresses', numberType: NumberType.Number },
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
        />

        <Divider size={24} />

        <CompareGroup<TransfersData>
          data={data}
          metadata={TRANSFERS_METADATA}
          zonesDetailsByKey={selectedZonesDetailsByKey}
          loading={loading}
        />

        <Divider size={24} />

        <CompareGroup<DauData>
          data={data}
          metadata={DAU_METADATA}
          zonesDetailsByKey={selectedZonesDetailsByKey}
          loading={loading}
        />
      </AnalysisCard.Body>
    </AnalysisCard>
  );
}
