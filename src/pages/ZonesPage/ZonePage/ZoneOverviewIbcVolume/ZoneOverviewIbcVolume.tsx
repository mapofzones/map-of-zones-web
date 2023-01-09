import { useState } from 'react';

import cn from 'classnames';

import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import { ButtonGroup, Card, NumberType, ValueWithPending } from 'components';
import { AreaChartBlock } from 'components/AreaChartBlock';
import { ElementSize } from 'types/ElementSize';

import { ChartType as CType } from '../ZoneOverview/ZoneOverviewToken/Types';
import { useZoneTokenChart } from '../ZoneOverview/ZoneOverviewToken/useZoneTokenChart';
import styles from './ZoneOverviewIbcVolume.module.scss';

import { ZoneOverviewIbcVolumeProps } from '.';

export enum ChartType {
  AREA = 'area',
  BAR = 'bar',
}

const chartOptions = [
  { key: ChartType.AREA, icon: AreaChartIcon },
  { key: ChartType.BAR, icon: BarChartIcon },
];

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
      <div className={styles.cardLegend}>
        <ValueWithPending
          className={styles.detailsItem}
          title="Total IBC"
          tooltipText="Total IBC" // TODO provide real tooltip text
          value={1414795629} // TODO provide real data
          numberType={NumberType.Currency}
          size={ElementSize.LARGE}
          loading={loading}
          showPeriod={true}
          defaultSkeletonText={'$1,414,795,629'}
        />
      </div>
      <AreaChartBlock
        data={[
          { time: 1, ibcTotal: 100, ibcIn: 90, ibcOut: 10 },
          { time: 2, ibcTotal: 120, ibcIn: 90, ibcOut: 30 },
          { time: 3, ibcTotal: 90, ibcIn: 60, ibcOut: 30 },
        ]}
        loading={loading}
        datasetInfo={{
          ibcTotal: {
            color: '#BFBFC3',
            description: 'IBC Total (24h)',
          },
          ibcIn: {
            color: '#22AAFF',
            description: 'IBC In',
          },
          ibcOut: {
            color: '#EE11CC',
            description: 'IBC Out',
          },
        }}
        dataFormatType={NumberType.Currency}
      />
    </Card>
  );
}
