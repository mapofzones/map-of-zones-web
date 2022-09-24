import cn from 'classnames';

import { NumberFormat, NumberType } from 'components';
import { IbcVolumeCard } from 'components/IbcVolumeCard/IbcVolumeCard';
import { TotalInfoCard } from 'components/SharedCards/TotalInfoCard/TotalInfoCard';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ZoneOverviewItem } from 'pages/HomePage/Sidebar/ZoneDetails/ZoneOverview/ZoneOverviewItem/ZoneOverviewItem';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';
import { getDauTitleByPeriod } from 'utils/helper';

import { useZoneOverviewActivity } from './useZoneOverviewActivity';
import styles from './ZoneOverviewActivity.module.scss';

export function ZoneOverviewActivity({ className }: { className?: string }) {
  const { data, loading } = useZoneOverviewActivity();

  const [period] = useSelectedPeriod();

  const dauTittle = getDauTitleByPeriod(period);

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Activity</div>
      <IbcVolumeCard className={styles.volumeCard} vertical />
      <TotalInfoCard
        className={styles.totalTxsCard}
        title={'Total Txs'}
        value={data?.totalTxs}
        numberType={NumberType.Number}
        chartData={data?.totalTxsChart}
        chartKey={'txs'}
        loading={loading}
        hasBorder={false}
        size={ElementSize.LARGE}
      />
      <TotalInfoCard
        className={styles.transfersCard}
        title={'IBC Transfers'}
        value={data?.ibcTransfers}
        pendingValue={data?.ibcTransfersPending}
        numberType={NumberType.Number}
        chartData={data?.ibcTransfersChart}
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
          tooltipText={tooltips['peersCount']()}
        ></ZoneOverviewItem>
        <ZoneOverviewItem
          className={cn(styles.detailedInfoItem, styles.channelsOverviewItem)}
          rowDirection
          title={'Channels'}
          value={data?.channelsCount}
          loading={loading}
          defaultLoadingValue={'250'}
          tooltipText={tooltips['channelsCount']()}
        ></ZoneOverviewItem>
        <ZoneOverviewItem
          className={cn(styles.detailedInfoItem, styles.dauOverviewItem)}
          rowDirection
          title={dauTittle}
          loading={loading}
          value={data?.dau}
          tooltipText={tooltips['dau'](period)}
        />
        <ZoneOverviewItem
          className={cn(styles.detailedInfoItem, styles.ibcDauOverviewItem)}
          rowDirection
          title={`IBC ${dauTittle}`}
          loading={loading}
          defaultLoadingValue={`2 345 (99,8% of ${dauTittle})`}
          tooltipText={tooltips['ibcDau'](period)}
        >
          <div className={styles.dauValue}>
            <NumberFormat value={data?.ibcDau} />
            <span className={styles.additionalInfo}>
              {' '}
              (<NumberFormat value={data?.ibcDauPercent} numberType={NumberType.Percent} />
              {` of ${dauTittle}`})
            </span>
          </div>
        </ZoneOverviewItem>
      </div>
    </div>
  );
}
