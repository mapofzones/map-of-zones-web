import { useState } from 'react';

import cn from 'classnames';

import { AreaChartIcon, BarChartIcon, PendingIcon } from 'assets/icons';
import { ButtonGroup, Card, NumberType } from 'components';
import { AreaChartBlock } from 'components/AreaChartBlock';
import { OverviewCardLegend } from 'components/OverviewCardLegend';
import { Circle } from 'components/ui/Circle';
import { ElementSize } from 'types/ElementSize';

import { useZoneOverviewIbcTransfersCard } from './useZoneOverviewIbcTransfersCard';
import styles from './ZoneOverviewIbcTransfers.module.scss';

import { ZoneOverviewIbcTransfersProps } from '.';

export enum ChartType {
  AREA = 'area',
  BAR = 'bar',
}

export const LEGEND_METADATA = {
  totalIbcTransfersCount: {
    title: 'Ibc Transfers',
    tooltipText: 'Ibc Transfers', // TODO provide real tooltip text
    numberType: NumberType.Number,
    size: ElementSize.LARGE,
    loading: false,
    showPeriod: true,
    defaultSkeletonText: '19 850',
    icon: <Circle color={'#22AAFF'} />,
    additional: false,
  },
  totalPending: {
    title: 'Processing',
    tooltipText: 'Processing (24h)', // TODO provide real tooltip text
    numberType: NumberType.Number,
    size: ElementSize.LARGE,
    loading: false,
    showPeriod: true,
    defaultSkeletonText: '10',
    additional: true,
    icon: <PendingIcon />,
  },
};

const chartOptions = [
  { key: ChartType.AREA, icon: AreaChartIcon },
  { key: ChartType.BAR, icon: BarChartIcon },
];

export function ZoneOverviewIbcTransfers({ className }: ZoneOverviewIbcTransfersProps) {
  const { data, loading } = useZoneOverviewIbcTransfersCard();

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.AREA); // TODO: use correct type

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const legendData = {
    totalIbcTransfersCount: data?.totalIbcTransfersCount,
    totalPending: data?.totalPending,
  };

  return (
    <Card title="Ibc Transfers" className={cn(styles.wrapper, className)}>
      <ButtonGroup
        className={styles.chartTypeSwitcher}
        size={ElementSize.SMALL}
        buttons={chartOptions}
        setSelectedButton={onChartSelected}
      />
      <OverviewCardLegend metadata={LEGEND_METADATA} values={legendData} />
      <AreaChartBlock
        data={data?.chart ?? []}
        loading={loading}
        dataKey={'ibcTransfersCount'}
        dataFormatType={NumberType.Number}
        color={'#22AAFF'}
      />
    </Card>
  );
}
