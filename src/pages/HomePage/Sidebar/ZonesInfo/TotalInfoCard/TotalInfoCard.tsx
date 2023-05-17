import cn from 'classnames';

import { PendingIcon } from 'assets/icons';
import { PeriodKeys } from 'components';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ChartItemByString } from 'types/chart';
import { Card, NumberFormat } from 'ui';
import { LineChart } from 'ui/LineChart/LineChart';
import { getDauTitleByPeriod } from 'utils/helper';

import styles from './TotalInfoCard.module.scss';
import { TotalInfoCardProps, TotalInfoType } from './TotalInfoCard.props';
import { ColumnKeys } from '../../../Types';
import { METADATA } from '../Types';

type TotalInfoMetadata = {
  title: string;
  valueKey: keyof TotalInfoType;
  pendingValueKey?: keyof TotalInfoType;
  chartKey?: keyof TotalInfoType;
};

export function getMetadataByPeriod(period: PeriodKeys): Record<ColumnKeys, TotalInfoMetadata> {
  return {
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
    dau: {
      title: getDauTitleByPeriod(period),
      valueKey: 'dau',
    },
  };
}

export function TotalInfoCard({
  totalInfo,
  loading,
  columnType,
  className,
  ...props
}: TotalInfoCardProps) {
  const [selectedPeriod] = useSelectedPeriod();

  const meta = getMetadataByPeriod(selectedPeriod)[columnType];
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
