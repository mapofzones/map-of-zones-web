import cn from 'classnames';

import { NumberFormat, NumberType } from 'components';
import { IbcVolumeCard } from 'components/IbcVolumeCard/IbcVolumeCard';
import { TotalInfoCard } from 'components/SharedCards/TotalInfoCard/TotalInfoCard';
import { ZoneOverviewItem } from 'pages/HomePage/Sidebar/ZoneDetails/ZoneOverview/ZoneOverviewItem/ZoneOverviewItem';
import { ElementSize } from 'types/ElementSize';

import { useZoneOverviewActivity } from './useZoneOverviewActivity';
import styles from './ZoneOverviewActivity.module.scss';

export function ZoneOverviewActivity({ className }: { className?: string }) {
  const { data, loading } = useZoneOverviewActivity();

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Activity</div>
      <IbcVolumeCard className={styles.volumeCard} vertical />
      <TotalInfoCard
        className={styles.totalTxsCard}
        title={'Total Txs'}
        value={data?.totalTxs ?? undefined}
        numberType={NumberType.Number}
        chartData={undefined}
        chartKey={'totalTxs'}
        loading={loading}
        hasBorder={false}
        size={ElementSize.LARGE}
      />
      <TotalInfoCard
        className={styles.transfersCard}
        title={'IBC Transfers'}
        value={data?.ibcTransfers ?? undefined}
        pendingValue={4546}
        numberType={NumberType.Number}
        chartData={undefined}
        chartKey={'ibcTransfer'}
        loading={loading}
        hasBorder={false}
        size={ElementSize.LARGE}
      />
      <div className={styles.overviewItemsGroup}>
        <ZoneOverviewItem
          className={cn(styles.detailedInfoItem, styles.peersOverviewItem)}
          rowDirection
          title={'Peers'}
          value={data?.peersCount}
          loading={loading}
          defaultLoadingValue={'12'}
          tooltipText={'Some tooltip'}
          tooltipPosition={'right'}
        ></ZoneOverviewItem>
        <ZoneOverviewItem
          className={cn(styles.detailedInfoItem, styles.channelsOverviewItem)}
          rowDirection
          title={'Channels'}
          value={data?.channelsCount}
          loading={loading}
          defaultLoadingValue={'250'}
          tooltipText={'Some tooltip'}
          tooltipPosition={'right'}
        ></ZoneOverviewItem>
        <ZoneOverviewItem
          className={cn(styles.detailedInfoItem, styles.dauOverviewItem)}
          rowDirection
          title={'DAU'}
          loading={loading}
          value={undefined}
          tooltipText={'Some tooltip'}
          tooltipPosition={'right'}
        />
        <ZoneOverviewItem
          className={cn(styles.detailedInfoItem, styles.ibcDauOverviewItem)}
          rowDirection
          title={'IBC DAU'}
          loading={loading}
          defaultLoadingValue={'2 345 (99,8% of DAU)'}
          tooltipText={'Some tooltip'}
          tooltipPosition={'right'}
        >
          <div className={styles.dauValue}>
            <NumberFormat value={data?.ibcDauMainnet} />
            <span className={styles.additionalInfo}> (99,8% of DAU)</span>
          </div>
        </ZoneOverviewItem>
      </div>
    </div>
  );
}
