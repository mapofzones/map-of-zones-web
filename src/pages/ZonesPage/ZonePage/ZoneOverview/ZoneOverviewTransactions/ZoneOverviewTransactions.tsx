import { useState } from 'react';

import cn from 'classnames';

import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import { ButtonGroup, Card, NumberType, ValueWithPending } from 'components';
import { AreaChartBlock } from 'components/AreaChartBlock';
import { ElementSize } from 'types/ElementSize';

import { useZoneOverviewTransactionCard } from './useZoneOverviewTransactionsCard';
import styles from './ZoneOverviewTransactions.module.scss';

import { ZoneOverviewTransactionsProps } from '.';

export enum ChartType {
  AREA = 'area',
  BAR = 'bar',
}

const chartOptions = [
  { key: ChartType.AREA, icon: AreaChartIcon },
  { key: ChartType.BAR, icon: BarChartIcon },
];

export function ZoneOverviewTransactions({ className }: ZoneOverviewTransactionsProps) {
  const { data, loading } = useZoneOverviewTransactionCard();

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.AREA); // TODO: use correct type

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  return (
    <Card title="Transactions" className={cn(styles.container, className)}>
      <ButtonGroup
        className={styles.chartTypeSwitcher}
        size={ElementSize.SMALL}
        buttons={chartOptions}
        setSelectedButton={onChartSelected}
      />
      <div className={styles.cardLegend}>
        <ValueWithPending
          className={styles.detailsItem}
          title="Total Transactions"
          tooltipText="Total Transactions" // TODO provide real tooltip text
          value={130310} // TODO provide real data
          numberType={NumberType.Number}
          size={ElementSize.LARGE}
          loading={loading}
          showPeriod={true}
          defaultSkeletonText={'418 940'}
        />
      </div>
      <AreaChartBlock
        data={data?.chart ?? []}
        loading={loading}
        datasetInfo={{
          value: {
            color: '#22AAFF',
            description: 'Total Transactions',
          },
        }}
        dataFormatType={NumberType.Number}
      />
    </Card>
  );
}