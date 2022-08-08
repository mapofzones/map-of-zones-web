import cn from 'classnames';

import { NumberFormat, NumberType } from 'components';
import { IbcVolumeCard } from 'components/IbcVolumeCard/IbcVolumeCard';
import { TotalInfoCard } from 'components/SharedCards/TotalInfoCard/TotalInfoCard';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ZoneOverviewItem } from 'pages/HomePage/Sidebar/ZoneDetails/ZoneOverview/ZoneOverviewItem/ZoneOverviewItem';

import styles from './ZoneOverviewActivity.module.scss';

export function ZoneOverviewActivity({ className }: any) {
  const [period] = useSelectedPeriod();

  const loading = false;

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Activity</div>
      <IbcVolumeCard
        className={styles.volumeCard}
        data={{
          ibcVolumeMainnet: 2414795629,
          ibcVolumeInPercent: 33,
          ibcVolumeOutPercent: 66,
          ibcVolumeInMainnet: 327629,
          ibcVolumeOutMainnet: 644725,
          ibcVolumeInPendingMainnet: 4546,
          ibcVolumeOutPendingMainnet: 889,
        }}
        loading={loading}
        period={period}
      />
      <TotalInfoCard
        className={styles.totalTxsCard}
        title={'Total TXS'}
        value={49850}
        numberType={NumberType.Number}
        chartData={undefined}
        chartKey={'txs'}
        loading={loading}
        hasBorder={false}
      />
      <TotalInfoCard
        className={styles.transfersCard}
        title={'IBC Transfers'}
        value={35452}
        pendingValue={4546}
        numberType={NumberType.Number}
        chartData={undefined}
        chartKey={'transfers'}
        loading={loading}
        hasBorder={false}
      />
      <div className={styles.overviewItemsGroup}>
        <ZoneOverviewItem
          className={styles.detailedInfoItem}
          rowLoyout
          title={'Peers'}
          value={12}
          loading={loading}
          defaultLoadingValue={'12'}
        ></ZoneOverviewItem>
        <ZoneOverviewItem
          className={styles.detailedInfoItem}
          rowLoyout
          title={'Channels'}
          value={304}
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
            <NumberFormat value={4020} />
            <span className={styles.additionalInfo}> (99,8% of DAU)</span>
          </div>
        </ZoneOverviewItem>
      </div>
    </div>
  );
}
