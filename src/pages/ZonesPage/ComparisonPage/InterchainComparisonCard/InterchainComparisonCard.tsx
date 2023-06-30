import cn from 'classnames';

import { PeriodKeys } from 'components';
import { AnalysisCard } from 'components/AnalysisCard';
import { CompareGroup, MetadataItem } from 'components/CompareGroup';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { INTERCHAIN_TITLE } from 'types/constants/AnalysisTitles';
import { NumberType } from 'types/NumberType';

import styles from './InterchainComparisonCard.module.scss';
import { InterchainData, useZonesComprisonInterchain } from './useZonesComparisonInterchain';
import { useSelectedZonesDetails } from '../hooks/useSelectedZonesDetails';

import { InterchainComparisonCardProps } from '.';

const INTERCHAIN_METADATA: Record<keyof InterchainData, MetadataItem> = {
  peersCount: { title: 'Peers', numberType: NumberType.Number },
  channelsCount: { title: 'Channels', numberType: NumberType.Number },
};

export function InterchainComparisonCard({
  className,
}: InterchainComparisonCardProps): JSX.Element {
  const { selectedZones, selectedZonesDetailsByKey } = useSelectedZonesDetails();

  const { data, loading } = useZonesComprisonInterchain(PeriodKeys.DAY, selectedZones);

  const isRows2Layout = useMediaQuery('(min-width: 1281px) and (max-width: 1440px)');
  const isRows3Layout = useMediaQuery('(min-width: 881px) and (max-width: 1280px)');
  const compareGroupVariant = isRows2Layout ? 'rows-2' : isRows3Layout ? 'rows-3' : 'columns-3';

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>{INTERCHAIN_TITLE}</AnalysisCard.Title>
      </AnalysisCard.Header>

      <AnalysisCard.Body>
        <CompareGroup<InterchainData>
          metadata={INTERCHAIN_METADATA}
          data={data}
          zonesDetailsByKey={selectedZonesDetailsByKey}
          loading={loading}
          layoutVariant={compareGroupVariant}
        />
      </AnalysisCard.Body>
    </AnalysisCard>
  );
}
