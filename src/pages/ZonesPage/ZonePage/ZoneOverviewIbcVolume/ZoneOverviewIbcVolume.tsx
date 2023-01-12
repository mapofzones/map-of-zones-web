import { useState } from 'react';

import cn from 'classnames';

import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import { ButtonGroup, Card, NumberType } from 'components';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { OverviewCardLegend } from 'components/OverviewCardLegend';
import { BarChart } from 'components/ui/Charts/BarChart/BarChart';
import { Circle } from 'components/ui/Circle';
import { ElementSize } from 'types/ElementSize';

import { ChartType as CType } from '../ZoneOverview/ZoneOverviewToken/Types';
import { useZoneTokenChart } from '../ZoneOverview/ZoneOverviewToken/useZoneTokenChart';
import styles from './ZoneOverviewIbcVolume.module.scss';

import { ZoneOverviewIbcVolumeProps } from '.';

const chartOptions = [
  { key: ChartType.AREA, icon: AreaChartIcon },
  { key: ChartType.BAR, icon: BarChartIcon },
];

export const IBC_VOLUME_METADATA = {
  totalIbcVolume: {
    title: 'Total IBC',
    tooltipText: 'Total IBC', // TODO provide real tooltip text
    numberType: NumberType.Currency,
    size: ElementSize.LARGE,
    loading: false,
    showPeriod: true,
    defaultSkeletonText: '$1,414,795,629',
    icon: <Circle color={'#BFBFC3'} />,
    additional: false,
  },
  ibcVolumeIn: {
    title: 'IBC In',
    tooltipText: 'IBC In', // TODO provide real tooltip text
    numberType: NumberType.Currency,
    size: ElementSize.LARGE,
    loading: false,
    showPeriod: false,
    defaultSkeletonText: '$34,824,000',
    additional: false,
    icon: <Circle color={'#22AAFF'} />,
  },
  ibcVolumeOut: {
    title: 'IBC Out',
    tooltipText: 'IBC Out', // TODO provide real tooltip text
    numberType: NumberType.Currency,
    size: ElementSize.LARGE,
    loading: false,
    showPeriod: false,
    defaultSkeletonText: '$34,824,000',
    additional: false,
    icon: <Circle color={'#EE11CC'} />,
  },
};

export function ZoneOverviewIbcVolume({ className }: ZoneOverviewIbcVolumeProps) {
  const { data, loading } = useZoneTokenChart(CType.VOLUME); // TODO: use correct hook

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.AREA); // TODO: use correct type

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  return (
    <Card title="IBC Volume" className={cn(styles.container, className)}>
      <ButtonGroup
        className={styles.chartTypeSwitcher}
        size={ElementSize.SMALL}
        buttons={chartOptions}
        setSelectedButton={onChartSelected}
      />
      <OverviewCardLegend
        metadata={IBC_VOLUME_METADATA}
        values={{
          totalIbcVolume: 1414795629,
          ibcVolumeIn: 34824000,
          ibcVolumeOut: 134824000,
        }}
      />
      {/* <ChartContainer
        chartType={selectedChartType}
        data={[
          { time: 1, ibcTotal: 100, ibcIn: 90, ibcOut: 10 },
          { time: 2, ibcTotal: 120, ibcIn: 90, ibcOut: 30 },
          { time: 3, ibcTotal: 90, ibcIn: 60, ibcOut: 30 },
          { time: 4, ibcTotal: 90, ibcIn: 60, ibcOut: 30 },
          { time: 5, ibcTotal: 90, ibcIn: 60, ibcOut: 30 },
          { time: 6, ibcTotal: 90, ibcIn: 60, ibcOut: 30 },
          { time: 7, ibcTotal: 90, ibcIn: 60, ibcOut: 30 },
        ]}
        loading={loading}
        datasetInfo={{
          ibcTotal: {
            color: '#BFBFC3',
            title: 'IBC Total (24h)',
          },
          ibcIn: {
            color: '#22AAFF',
            title: 'IBC In',
          },
          ibcOut: {
            color: '#EE11CC',
            title: 'IBC Out',
          },
        }}
        dataFormatType={NumberType.Currency}
      /> */}
    </Card>
  );
}
