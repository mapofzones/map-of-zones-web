import cn from 'classnames';

import { Card, Divider, NumberType, ValueWithPending } from 'components';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';

import { useZoneOverviewInterchain } from './useZoneOverviewInterchain';
import styles from './ZoneOverviewInterchain.module.scss';

import { ZoneOverviewInterchainProps } from '.';

export function ZoneOverviewInterchain({ className }: ZoneOverviewInterchainProps) {
  const { data, loading } = useZoneOverviewInterchain();

  return (
    <Card title="Interchain" className={cn(className, styles.container)}>
      <div className={styles.cardContent}>
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
      </div>
    </Card>
  );
}
