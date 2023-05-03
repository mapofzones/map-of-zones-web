import cn from 'classnames';

import { Card, Divider, NumberType, ValueWithPending } from 'components';
import { OverviewCard } from 'components/OverviewCard/OverviewCard';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';

import { useZoneOverviewInterchain } from './useZoneOverviewInterchain';
import styles from './ZoneOverviewInterchain.module.scss';

import { ZoneOverviewInterchainProps } from '.';

export function ZoneOverviewInterchain({ className }: ZoneOverviewInterchainProps) {
  const { data, loading } = useZoneOverviewInterchain();

  return (
    <OverviewCard className={cn(className, styles.container)}>
      <OverviewCard.Header>
        <OverviewCard.Title>Interchain</OverviewCard.Title>
      </OverviewCard.Header>

      <OverviewCard.Body>
        <ValueWithPending
          className={cn(styles.valueBlock, styles.peers)}
          title={'Peers'}
          value={data?.peersCount}
          numberType={NumberType.Number}
          tooltipText={tooltips['peersCount']()}
          size={ElementSize.LARGE}
          loading={loading}
          defaultSkeletonText={'50'}
        />

        <Divider />

        <ValueWithPending
          className={cn(styles.valueBlock, styles.channels)}
          title={'Channels'}
          value={data?.channelsCount}
          numberType={NumberType.Number}
          tooltipText={tooltips['channelsCount']()}
          size={ElementSize.LARGE}
          loading={loading}
          defaultSkeletonText={'250'}
        />
      </OverviewCard.Body>
    </OverviewCard>
  );
}
