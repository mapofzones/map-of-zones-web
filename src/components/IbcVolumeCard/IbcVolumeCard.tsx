import cn from 'classnames';

import { VolumeLineChart } from 'components';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { NumberType } from 'types/NumberType';
import { tooltips } from 'types/Tooltips';
import { Card, ExplanationTooltip, LineChart, NumberFormat } from 'ui';

import styles from './IbcVolumeCard.module.scss';
import { IbcVolumeCardProps } from './IbcVolumeCard.props';
import { useIbcVolumeCard } from './useIbcVolumeCard';

export function IbcVolumeCard({
  className,
  hasBorder = false,
  vertical = false,
}: IbcVolumeCardProps): JSX.Element {
  const [period] = useSelectedPeriod();

  const { data, loading } = useIbcVolumeCard();

  return (
    <Card
      className={cn(styles.container, className, {
        [styles.vertical]: vertical,
      })}
      hasBorder={hasBorder}
      loading={loading}
    >
      <span className={styles.title}>
        IBC Volume ({period})&nbsp;
        <ExplanationTooltip text={tooltips['ibcVolume']()} />
      </span>
      <NumberFormat
        className={styles.volumeValue}
        value={data?.ibcVolume}
        numberType={NumberType.Currency}
      />
      <div className={styles.chart}>
        {data?.ibcVolumeChart && <LineChart data={data.ibcVolumeChart} dataKey={'volume'} />}
      </div>
      <VolumeLineChart
        className={styles.volumeLineChart}
        volumeInPercent={data?.ibcVolumeInPercent ?? 0}
        volumeOutPercent={data?.ibcVolumeOutPercent ?? 0}
      />
      <NumberFormat
        className={styles.volumeInValue}
        value={data?.ibcVolumeIn}
        numberType={NumberType.Currency}
      />
      <NumberFormat
        className={cn(styles.volumeOutValue, 'alignRight')}
        value={data?.ibcVolumeOut}
        numberType={NumberType.Currency}
      />
      <NumberFormat
        className={styles.volumeInPendingValue}
        value={data?.ibcVolumeInPending}
        numberType={NumberType.Currency}
      />
      <NumberFormat
        className={cn(styles.volumeOutPendingValue, 'alignRight')}
        value={data?.ibcVolumeOutPending}
        numberType={NumberType.Currency}
      />
    </Card>
  );
}
