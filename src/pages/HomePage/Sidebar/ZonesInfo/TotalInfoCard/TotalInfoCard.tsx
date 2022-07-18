import cn from 'classnames';

import { Card, NumberFormat } from 'components';
import { LineChart } from 'components/LineChart/LineChart';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { PendingIcon } from 'icons';
import { ChartItemByString } from 'utils/helper';

import { ColumnKeys } from '../../../Types';
import { METADATA } from '../Types';
import styles from './TotalInfoCard.module.scss';
import { TotalInfoCardProps, TotalInfoType } from './TotalInfoCard.props';

type TotalInfoMetadata = {
  title: string;
  valueKey: keyof TotalInfoType;
  pendingValueKey?: keyof TotalInfoType;
  chartKey?: keyof TotalInfoType;
};

const metadata: Record<ColumnKeys, TotalInfoMetadata> = {
  ibcVolume: {
    title: 'Total IBC Volume',
    valueKey: 'ibcVolume',
    pendingValueKey: 'ibcVolumePending',
    chartKey: 'ibcVolumeChart',
  },
  ibcTransfers: {
    title: 'Total IBC Transfers',
    valueKey: 'ibcTransfers',
    pendingValueKey: 'ibcTransfersPending',
  },
  totalTxs: {
    title: 'Total Transaction',
    valueKey: 'ibcTransfers', // add total txs
  },
};

export function TotalInfoCard({
  totalInfo,
  loading,
  columnType,
  className,
  ...props
}: TotalInfoCardProps) {
  const [selectedPeriod] = useSelectedPeriod();

  const meta = metadata[columnType];
  const numberType = METADATA[columnType].numberType;
  const chartData =
    (meta.chartKey && totalInfo && (totalInfo[meta.chartKey] as ChartItemByString[])) || [];

  return (
    <Card className={cn(styles.container, className)} hasBorder {...props} loading={loading}>
      {totalInfo && (
        <>
          <span className={styles.container_title}>
            {meta.title} ({selectedPeriod})
          </span>
          <NumberFormat
            className={styles.container_value}
            value={totalInfo[meta.valueKey] as number}
            numberType={numberType}
          />
          {meta.pendingValueKey && (
            <span className={styles.container_pendingContainer}>
              <PendingIcon />
              <NumberFormat
                className={styles.container_pending}
                value={totalInfo[meta.pendingValueKey] as number}
                numberType={numberType}
              />
            </span>
          )}
          {meta.chartKey && (totalInfo[meta.chartKey] as ChartItemByString[]) && (
            <LineChart
              className={styles.container_chart}
              data={chartData}
              dataKey={meta.chartKey}
            />
          )}
        </>
      )}
    </Card>
  );
}
