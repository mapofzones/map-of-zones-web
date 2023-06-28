import cn from 'classnames';

import { AnalysisCard } from 'components/AnalysisCard';
import { CompareGroup, MetadataItem } from 'components/CompareGroup';
import { useGetTokenSupplyQuery } from 'services/ComparisonPage/comparisonApi';
import {
  STACKING_APR_TITLE,
  STACKING_TITLE,
  TOTAL_BONDED_RATE_TITLE,
} from 'types/constants/AnalysisTitles';
import { NumberType } from 'types/NumberType';

import styles from './StakingComparisonCard.module.scss';
import { useSelectedZonesDetails } from '../hooks/useSelectedZonesDetails';

import { StakingComparisonCardProps } from '.';

interface StakingData {
  stackingApr?: number;
  bondedTokensPercent?: number;
}

const STAKING_METADATA: Record<keyof StakingData, MetadataItem> = {
  stackingApr: { title: STACKING_APR_TITLE, numberType: NumberType.Percent },
  bondedTokensPercent: { title: TOTAL_BONDED_RATE_TITLE, numberType: NumberType.Percent },
};

export function StakingComparisonCard({ className }: StakingComparisonCardProps): JSX.Element {
  const { selectedZones, selectedZonesDetailsByKey } = useSelectedZonesDetails();

  const { data, isLoading: loading } = useGetTokenSupplyQuery({ zones: selectedZones });

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>{STACKING_TITLE}</AnalysisCard.Title>
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
