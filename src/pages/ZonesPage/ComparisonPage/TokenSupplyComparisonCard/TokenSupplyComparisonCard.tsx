import cn from 'classnames';

import { AnalysisCard } from 'components/AnalysisCard';
import { CompareGroup, MetadataItem } from 'components/CompareGroup';
import { NumberType } from 'types/NumberType';

import styles from './TokenSupplyComparisonCard.module.scss';
import { useBlockchainParametersComparison } from '../providers/BlockchainParametersComparisonProvider';
import { useComparisonSelectedZones } from '../providers/ComparisonSelectedZonesProvider';

import { TokenSupplyComparisonCardProps } from '.';

interface TokenSupplyData {
  onChainSupply?: number;
  inflation?: number;
}

const TOKEN_SUPPLY_METADATA: Record<keyof TokenSupplyData, MetadataItem> = {
  onChainSupply: { title: 'On-Chain Supply' },
  inflation: { title: 'Inflation' },
};

export function TokenSupplyComparisonCard({
  className,
}: TokenSupplyComparisonCardProps): JSX.Element {
  const { selectedZonesDetailsByKey } = useComparisonSelectedZones();

  const { data, loading } = useBlockchainParametersComparison();

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
          numberType={NumberType.Number}
        />
      </AnalysisCard.Body>
    </AnalysisCard>
  );
}
