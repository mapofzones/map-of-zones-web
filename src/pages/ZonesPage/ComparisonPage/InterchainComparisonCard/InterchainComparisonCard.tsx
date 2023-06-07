import cn from 'classnames';

import { PeriodKeys } from 'components';
import { AnalysisCard } from 'components/AnalysisCard';
import { CompareGroup, MetadataItem } from 'components/CompareGroup';
import { NumberType } from 'types/NumberType';

import styles from './InterchainComparisonCard.module.scss';
import { InterchainData, useZonesComprisonInterchain } from './useZonesComparisonInterchain';
import { useComparisonSelectedZones } from '../providers/ComparisonSelectedZonesProvider';

import { InterchainComparisonCardProps } from '.';

const INTERCHAIN_METADATA: Record<keyof InterchainData, MetadataItem> = {
  peersCount: { title: 'Peers', numberType: NumberType.Number },
  channelsCount: { title: 'Channels', numberType: NumberType.Number },
};

export function InterchainComparisonCard({
  className,
}: InterchainComparisonCardProps): JSX.Element {
  const { selectedZones, selectedZonesDetailsByKey } = useComparisonSelectedZones();

  const { data, loading } = useZonesComprisonInterchain(PeriodKeys.DAY, selectedZones);

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>Interchain</AnalysisCard.Title>
      </AnalysisCard.Header>

      <AnalysisCard.Body>
        <CompareGroup<InterchainData>
          metadata={INTERCHAIN_METADATA}
          data={data}
          zonesDetailsByKey={selectedZonesDetailsByKey}
          loading={loading}
        />
      </AnalysisCard.Body>
    </AnalysisCard>
  );
}
