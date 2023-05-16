import cn from 'classnames';

import { PeriodKeys } from 'components';
import { OverviewCard } from 'components/OverviewCard';
import { NumberType } from 'ui';

import { InterchainData, useZonesComprisonInterchain } from './hooks/useZonesComparisonInterchain';
import styles from './InterchainComparisonCard.module.scss';
import { CompareGroup, MetadataItem } from '../ActivityComparisonCard/CompareGroup';
import { useComparisonSelectedZones } from '../context/ComparisonSelectedZonesProvider';

import { InterchainComparisonCardProps } from '.';

const INTERCHAIN_METADATA: Record<keyof InterchainData, MetadataItem> = {
  peersCount: { title: 'Peers' },
  channelsCount: { title: 'Channels' },
};

export function InterchainComparisonCard({
  className,
}: InterchainComparisonCardProps): JSX.Element {
  const { zones: selectedZones } = useComparisonSelectedZones();

  const { data, loading } = useZonesComprisonInterchain(PeriodKeys.DAY, selectedZones);

  return (
    <OverviewCard className={cn(className, styles.container)}>
      <OverviewCard.Header>
        <OverviewCard.Title>Interchain</OverviewCard.Title>
      </OverviewCard.Header>

      <OverviewCard.Body>
        <CompareGroup<InterchainData>
          metadata={INTERCHAIN_METADATA}
          data={data}
          loading={loading}
          numberType={NumberType.Number}
        />
      </OverviewCard.Body>
    </OverviewCard>
  );
}
