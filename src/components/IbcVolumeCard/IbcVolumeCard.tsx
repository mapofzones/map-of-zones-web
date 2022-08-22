import cn from 'classnames';

import { VolumeLineChart } from 'components';
import { Card, ExplanationTooltip, LineChart, NumberFormat, NumberType } from 'components/ui';

import styles from './IbcVolumeCard.module.scss';
import { IbcVolumeCardProps } from './IbcVolumeCard.props';

export function IbcVolumeCard({
  className,
  data,
  hasBorder = false,
  loading,
  period,
  vertical = false,
}: IbcVolumeCardProps): JSX.Element {
  return (
    <Card
      className={cn(styles.container, className, {
        [styles.vertical]: vertical,
      })}
      hasBorder={hasBorder}
      loading={loading}
    >
      {data && (
        <>
          <span className={styles.title}>
            IBC Volume ({period})&nbsp;
            <ExplanationTooltip text={'IBC Volume tooltip'} position={'center'} />
          </span>
          <NumberFormat
            className={styles.volumeValue}
            value={data.ibcVolumeMainnet}
            numberType={NumberType.Currency}
          />
          <div className={styles.chart}>
            {data.ibcVolumeChart && (
              <LineChart data={data.ibcVolumeChart} dataKey={'ibcVolumeChart'} />
            )}
          </div>
          <VolumeLineChart
            className={styles.volumeLineChart}
            volumeInPercent={data.ibcVolumeInPercent ?? 0}
            volumeOutPercent={data.ibcVolumeOutPercent ?? 0}
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
