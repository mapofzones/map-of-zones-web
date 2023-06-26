import cn from 'classnames';

import { AnalysisCard } from 'components/AnalysisCard';
import { CompareGroup, MetadataItem } from 'components/CompareGroup';
import { STACKING_APR, TOTAL_BONDED_RATE } from 'types/constants/AnalysisTitles';
import { NumberType } from 'types/NumberType';

import styles from './StakingComparisonCard.module.scss';
import { useBlockchainParametersComparison } from '../providers/BlockchainParametersComparisonProvider';
import { useComparisonSelectedZones } from '../providers/ComparisonSelectedZonesProvider';

import { StakingComparisonCardProps } from '.';

interface StakingData {
  stackingApr?: number;
  bondedTokensPercent?: number;
}

const STAKING_METADATA: Record<keyof StakingData, MetadataItem> = {
  stackingApr: { title: STACKING_APR, numberType: NumberType.Percent },
  bondedTokensPercent: { title: TOTAL_BONDED_RATE, numberType: NumberType.Percent },
};

export function StakingComparisonCard({ className }: StakingComparisonCardProps): JSX.Element {
  const { selectedZonesDetailsByKey } = useComparisonSelectedZones();

  const { data, loading } = useBlockchainParametersComparison();

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>Staking</AnalysisCard.Title>
      </AnalysisCard.Header>

      <AnalysisCard.Body>
        <CompareGroup<StakingData>
          metadata={STAKING_METADATA}
          zonesDetailsByKey={selectedZonesDetailsByKey}
          data={data}
          loading={loading}
        />
      </AnalysisCard.Body>
    </AnalysisCard>
  );
}
