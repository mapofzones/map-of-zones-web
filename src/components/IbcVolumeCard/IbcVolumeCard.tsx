import cn from 'classnames';

import { VolumeLineChart } from 'components';
import { Card, NumberFormat, NumberType } from 'components/ui';

import styles from './IbcVolumeCard.module.scss';

export function IbcVolumeCard({ data, loading, period, hasBorder, className }: any) {
  return (
    <Card className={cn(styles.container, className)} hasBorder={hasBorder} loading={loading}>
      {data && (
        <>
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
            className={cn(styles.volumeOutValue, 'alignRight')}
            value={data.ibcVolumeOutMainnet}
            numberType={NumberType.Currency}
          />
          <NumberFormat
            className={styles.volumeInPendingValue}
            value={data.ibcVolumeInPendingMainnet}
            numberType={NumberType.Currency}
          />
          <NumberFormat
            className={cn(styles.volumeOutPendingValue, 'alignRight')}
            value={data.ibcVolumeOutPendingMainnet}
            numberType={NumberType.Currency}
          />
        </>
      )}
    </Card>
  );
}
