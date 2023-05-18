import { useState } from 'react';

import cn from 'classnames';

import {
  AnalysisCard,
  AnalysisChartTypeButtonsGroup,
  AnalysisPeriodButtonsGroup,
  AnalysisCardLegend,
  AnalysisLegendItem,
  AnalysisLegendTitle,
  LegendNumberValue,
} from 'components/AnalysisCard';
import { ChartContainer } from 'components/ChartContainer';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartType } from 'types/ChartType';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { ButtonGroup, SkeletonTextWrapper } from 'ui';
import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

import styles from './IbcVolumeComparisonCard.module.scss';
import { IbcVolumeProperties, useZonesIbcVolumeComparison } from './useZonesIbcVolumeComparison';
import { useComparisonSelectedZones } from '../context/ComparisonSelectedZonesProvider';

import { IbcVolumeComparisonCardProps } from '.';

const IBC_VOLUME_CARD_OPTIONS: ButtonGroupItem<IbcVolumeProperties>[] = [
  { key: 'ibcVolume', title: 'Total IBC' },
  { key: 'ibcVolumeIn', title: 'IBC In' },
  { key: 'ibcVolumeOut', title: 'IBC Out' },
];
const PERIODS: AnalysisCardPeriod[] = ['1w', '1m'];

export function IbcVolumeComparisonCard({ className }: IbcVolumeComparisonCardProps): JSX.Element {
  const [selectedProperty, setSelectedProperty] = useState<IbcVolumeProperties>('ibcVolume');

  function onTabSelected(item: { key?: IbcVolumeProperties }): void {
    item?.key && setSelectedProperty(item?.key);
  }

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.AREA);

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const [selectedPeriod, setSelectedPeriod] = useState<AnalysisCardPeriod>('1w');

  const onPeriodSelected = (key: AnalysisCardPeriod) => {
    setSelectedPeriod(key);
  };

  const { zones: selectedZones } = useComparisonSelectedZones();

  const { data, charts, datasetInfo, loading } = useZonesIbcVolumeComparison(
    selectedZones,
    selectedPeriod
  );

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>IBC Volume</AnalysisCard.Title>

        <ButtonGroup
          className={styles.groupTabSelector}
          size={ElementSize.SMALL}
          buttons={IBC_VOLUME_CARD_OPTIONS}
          setSelectedButton={onTabSelected}
        />
      </AnalysisCard.Header>

      <div className={styles.chartControls}>
        <AnalysisChartTypeButtonsGroup
          chartTypes={[ChartType.AREA, ChartType.BAR]}
          onChartSelected={onChartSelected}
        />
        <AnalysisPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
      </div>

      <AnalysisCardLegend className={styles.chartLegend}>
        {data?.map((item) => (
          <AnalysisLegendItem key={item.zone} className={styles.legendItem}>
            <AnalysisLegendTitle
              title={`${item.zone}`}
              circleColor={datasetInfo[item.zone].color}
            />
            <SkeletonTextWrapper loading={loading} defaultText={'$1,56'}>
              <LegendNumberValue value={item[selectedProperty]} numberType={NumberType.Currency} />
            </SkeletonTextWrapper>
          </AnalysisLegendItem>
        ))}
      </AnalysisCardLegend>

      <ChartContainer
        chartType={selectedChartType}
        data={charts[selectedProperty] ?? []}
        loading={loading}
        datasetInfo={datasetInfo}
        dataFormatType={NumberType.Currency}
      />
    </AnalysisCard>
  );
}
