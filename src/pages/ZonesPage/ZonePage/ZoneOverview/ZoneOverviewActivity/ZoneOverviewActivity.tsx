import cn from 'classnames';

import { NumberFormat, NumberType } from 'components';
import { IbcVolumeCard } from 'components/IbcVolumeCard/IbcVolumeCard';
import { TotalInfoCard } from 'components/SharedCards/TotalInfoCard/TotalInfoCard';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ZoneOverviewItem } from 'pages/HomePage/Sidebar/ZoneDetails/ZoneOverview/ZoneOverviewItem/ZoneOverviewItem';

import { useZoneOverviewActivity } from './useZoneOverviewActivity';
import styles from './ZoneOverviewActivity.module.scss';

export function ZoneOverviewActivity({ className }: any) {
  const [period] = useSelectedPeriod();

  const { data, loading } = useZoneOverviewActivity();

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Activity</div>
      <IbcVolumeCard
        className={styles.volumeCard}
        data={{
          ibcVolumeMainnet: data?.ibcVolumeMainnet,
          ibcVolumeInPercent: data?.ibcVolumeInPercent,
          ibcVolumeOutPercent: data?.ibcVolumeOutPercent,
          ibcVolumeInMainnet: data?.ibcVolumeInMainnet,
          ibcVolumeOutMainnet: data?.ibcVolumeOutMainnet,
          ibcVolumeInPendingMainnet: data?.ibcVolumeInPendingMainnet,
          ibcVolumeOutPendingMainnet: data?.ibcVolumeOutPendingMainnet,
        }}
        loading={loading}
        period={period}
      />
      <TotalInfoCard
        className={styles.totalTxsCard}
        title={'Total TXS'}
        value={data?.totalTxs ?? undefined}
        numberType={NumberType.Number}
        chartData={undefined}
        chartKey={'totalTxs'}
        loading={loading}
        hasBorder={false}
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
      />
      <div className={styles.overviewItemsGroup}>
        <ZoneOverviewItem
          className={styles.detailedInfoItem}
          rowLoyout
          title={'Peers'}
          value={data?.peersCount}
          loading={loading}
          defaultLoadingValue={'12'}
        ></ZoneOverviewItem>
        <ZoneOverviewItem
          className={styles.detailedInfoItem}
          rowLoyout
          title={'Channels'}
          value={data?.channelsCount}
          loading={loading}
          defaultLoadingValue={'250'}
        ></ZoneOverviewItem>
      </div>
      <div className={styles.overviewItemsGroup}>
        <ZoneOverviewItem
          className={styles.detailedInfoItem}
          rowLoyout
          title={'DAU'}
          loading={loading}
          value={undefined}
        />
        <ZoneOverviewItem
          className={styles.detailedInfoItem}
          rowLoyout
          title={'IBC DAU'}
          loading={loading}
          defaultLoadingValue={'2 345 (99,8% of DAU)'}
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
