import cn from 'classnames';

import { AnalysisCard } from 'components/AnalysisCard';
import { CompareGroup, MetadataItem } from 'components/CompareGroup';
import { useGetTokenSupplyQuery } from 'services/ComparisonPage/GetTokenSupply';
import { INFLATION, ON_CHAIN_SUPPLY } from 'types/constants/AnalysisTitles';
import { NumberType } from 'types/NumberType';

import styles from './TokenSupplyComparisonCard.module.scss';
import { useSelectedZonesDetails } from '../hooks/useSelectedZonesDetails';

import { TokenSupplyComparisonCardProps } from '.';

interface TokenSupplyData {
  onChainSupply?: number;
  inflation?: number;
}

const TOKEN_SUPPLY_METADATA: Record<keyof TokenSupplyData, MetadataItem> = {
  onChainSupply: { title: ON_CHAIN_SUPPLY, numberType: NumberType.Number },
  inflation: { title: INFLATION, numberType: NumberType.Percent },
};

export function TokenSupplyComparisonCard({
  className,
}: TokenSupplyComparisonCardProps): JSX.Element {
  const { selectedZones, selectedZonesDetailsByKey } = useSelectedZonesDetails();

  const { data, isLoading: loading } = useGetTokenSupplyQuery({ zones: selectedZones });

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>Token Supply</AnalysisCard.Title>
      </AnalysisCard.Header>

      <AnalysisCard.Body>
        <CompareGroup<TokenSupplyData>
          metadata={TOKEN_SUPPLY_METADATA}
          zonesDetailsByKey={selectedZonesDetailsByKey}
          data={data}
          loading={loading}
        />
      </AnalysisCard.Body>
    </AnalysisCard>
  );
}
