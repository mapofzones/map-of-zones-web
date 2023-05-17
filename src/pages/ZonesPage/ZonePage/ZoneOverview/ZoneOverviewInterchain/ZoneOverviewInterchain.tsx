import cn from 'classnames';

import { ValueWithPending } from 'components';
import { AnalysisCard } from 'components/AnalysisCard';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { tooltips } from 'types/Tooltips';
import { Divider } from 'ui';

import { useZoneOverviewInterchain } from './useZoneOverviewInterchain';
import styles from './ZoneOverviewInterchain.module.scss';

import { ZoneOverviewInterchainProps } from '.';

export function ZoneOverviewInterchain({ className }: ZoneOverviewInterchainProps) {
  const { data, loading } = useZoneOverviewInterchain();

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>Interchain</AnalysisCard.Title>
      </AnalysisCard.Header>

      <AnalysisCard.Body>
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
      </AnalysisCard.Body>
    </AnalysisCard>
  );
}
