import cn from 'classnames';

import { AnalysisCard } from 'components/AnalysisCard';
import { CompareGroup, MetadataItem } from 'components/CompareGroup';
import { useGetTokenSupplyQuery } from 'services/ComparisonPage/GetTokenSupply';
import {
  INFRASTRUCTURE_TITLE,
  NODES_TITLE,
  VALIDATORS_SUBTITLE,
} from 'types/constants/AnalysisTitles';
import { ZoneAnalysisBlockchainParametersData } from 'types/models/Analysis/ZoneAnalysisBlockchainParametersData';
import { NumberType } from 'types/NumberType';

import styles from './InfrastructureComparisonCard.module.scss';
import { InfrastructureComparisonCardProps } from './InfrastructureComparisonCard.props';
import { useBlockchainParametersCompareGroupLayoutVariant } from '../hooks/useBlockchainParametersCompareGroupLayoutVariant';
import { useComparisonSelectedZones } from '../providers/ComparisonSelectedZonesProvider';

type InfrastructureData = Pick<
  ZoneAnalysisBlockchainParametersData,
  'validatorsCount' | 'nodesCount'
>;

const INFRASTRUCTURE_METADATA: Record<keyof InfrastructureData, MetadataItem> = {
  validatorsCount: { title: VALIDATORS_SUBTITLE, numberType: NumberType.Number },
  nodesCount: { title: NODES_TITLE, numberType: NumberType.Number },
};

export function InfrastructureComparisonCard({
  className,
}: InfrastructureComparisonCardProps): JSX.Element {
  const { selectedZones, selectedZonesDetailsByKey } = useComparisonSelectedZones();

  const { data, isLoading: loading } = useGetTokenSupplyQuery({ zones: selectedZones });

  const compareGroupVariant = useBlockchainParametersCompareGroupLayoutVariant();

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>{INFRASTRUCTURE_TITLE}</AnalysisCard.Title>
      </AnalysisCard.Header>

      <AnalysisCard.Body>
        <CompareGroup<InfrastructureData>
          metadata={INFRASTRUCTURE_METADATA}
          zonesDetailsByKey={selectedZonesDetailsByKey}
          data={data}
          loading={loading}
          layoutVariant={compareGroupVariant}
        />
      </AnalysisCard.Body>
    </AnalysisCard>
  );
}
