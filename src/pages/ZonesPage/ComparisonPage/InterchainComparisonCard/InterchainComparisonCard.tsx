import cn from 'classnames';

import { PeriodKeys } from 'components';
import { OverviewCard } from 'components/OverviewCard/OverviewCard';
import { NumberType } from 'ui';

import { InterchainData, useZonesComprisonInterchain } from './hooks/useZonesComparisonInterchain';
import styles from './InterchainComparisonCard.module.scss';
import { CompareGroup } from '../ActivityComparisonCard/CompareGroup';
import { useComparisonSelectedZones } from '../context/ComparisonSelectedZonesProvider';

import { InterchainComparisonCardProps } from '.';

const INTERCHAIN_METADATA: Record<
  keyof InterchainData,
  {
    title: string;
  }
> = {
  peersCount: { title: 'Peers' },
  channelsCount: { title: 'Channels' },
};

export function InterchainComparisonCard({
  className,
}: InterchainComparisonCardProps): JSX.Element {
  const { zones: selectedZones } = useComparisonSelectedZones();

  const { zones, interchainData, loading } = useZonesComprisonInterchain(
    PeriodKeys.DAY,
    selectedZones
  );

  return (
    <OverviewCard className={cn(className, styles.container)}>
      <OverviewCard.Header>
        <OverviewCard.Title>Interchain</OverviewCard.Title>
      </OverviewCard.Header>

      <OverviewCard.Body>
        <CompareGroup
          zones={zones}
          data={interchainData}
          metadata={INTERCHAIN_METADATA}
          loading={loading}
          numberType={NumberType.Number}
        />
      </OverviewCard.Body>
    </OverviewCard>
  );
}
