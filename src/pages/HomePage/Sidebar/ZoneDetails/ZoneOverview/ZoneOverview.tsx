import cn from 'classnames';

import { Button, Card, NumberFormat, NumberType, VolumeLineChart } from 'components';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ArrowRight } from 'icons';

import { useZoneOverview } from './useZoneOverview';
import styles from './ZoneOverview.module.scss';
import { ZoneOverviewItem } from './ZoneOverviewItem/ZoneOverviewItem';

function ZoneOverview() {
  const [period] = useSelectedPeriod();

  const data = useZoneOverview();

  return (
    <>
      {data && (
        <div className={styles.container}>
          <Card className={styles.totalOverview}>
            <span className={styles.title}>IBC Volume ({period})</span>
            <NumberFormat
              className={styles.volumeValue}
              value={data.ibcVolumeMainnet}
              numberType={NumberType.Currency}
            />
            <div className={styles.chart}></div>
            <VolumeLineChart
              className={styles.volumeLineChart}
              volumeInPercent={data.ibcVolumeInPercent}
              volumeOutPercent={data.ibcVolumeOutPercent}
            />
            <NumberFormat
              className={styles.volumeInValue}
              value={data.ibcVolumeInMainnet}
              numberType={NumberType.Currency}
            />
            <NumberFormat
              className={cn(styles.volumeOutValue, 'align-right')}
              value={data.ibcVolumeOutMainnet}
              numberType={NumberType.Currency}
            />
            <NumberFormat
              className={styles.volumeInPendingValue}
              value={data.ibcVolumeInPendingMainnet}
              numberType={NumberType.Currency}
            />
            <NumberFormat
              className={cn(styles.volumeOutPendingValue, 'align-right')}
              value={data.ibcVolumeOutPendingMainnet}
              numberType={NumberType.Currency}
            />
          </Card>
          <div className={styles.detailedInfo}>
            <ZoneOverviewItem
              className={styles.detailedInfoItem}
              title={'Total TXS'}
              period={period}
              value={data.totalTxs}
            ></ZoneOverviewItem>
            <ZoneOverviewItem
              className={styles.detailedInfoItem}
              title={'IBC Transfers'}
              period={period}
              value={data.ibcTransfers}
            ></ZoneOverviewItem>
            <ZoneOverviewItem
              className={styles.detailedInfoItem}
              title={'Peers'}
              value={data.peersCountMainnet}
            ></ZoneOverviewItem>
            <ZoneOverviewItem
              className={styles.detailedInfoItem}
              title={'Channels'}
              value={data.channelsCount}
            ></ZoneOverviewItem>
            <ZoneOverviewItem
              className={styles.detailedInfoItem}
              title={'DAU'}
              value={data.ibcDauMainnet}
            >
              -
            </ZoneOverviewItem>
            <ZoneOverviewItem className={styles.detailedInfoItem} title={'IBC DAU'}>
              <NumberFormat value={data.ibcDauMainnet} />
              <span className={styles.additionalInfo}> (99,8% of DAU)</span>
            </ZoneOverviewItem>
            <ZoneOverviewItem
              className={styles.detailedInfoItem}
              title={'Token Price'}
              value={data.ibcDauMainnet}
            >
              -
            </ZoneOverviewItem>
            <ZoneOverviewItem className={styles.detailedInfoItem} title={'Market Cap'}>
              -
            </ZoneOverviewItem>
          </div>
          <Button className={styles.detailedBtn}>
            <span className={styles.btnText}>Learn More</span>
            <ArrowRight />
          </Button>
        </div>
      )}
    </>
  );
}

export { ZoneOverview };
