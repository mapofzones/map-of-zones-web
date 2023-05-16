import { useState } from 'react';

import cn from 'classnames';

import { PeriodKeys } from 'components';
import {
  AnalysisChartTypeButtonsGroup,
  AnalysisPeriodButtonsGroup,
  AnalysisCard,
  AnalysisCardLegend,
  AnalysisLegendItem,
  AnalysisLegendTitle,
  LegendNumberValue,
} from 'components/AnalysisCard';
import { ChartContainer, ChartType } from 'components/ChartContainer';
import { ElementSize } from 'types/ElementSize';
import { ButtonGroup, NumberType, SkeletonTextWrapper } from 'ui';
import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

import styles from './TokenComparisonCard.module.scss';
import { TokenProperties, useZonesTokenComparison } from './useZonesTokenComparison';
import { useComparisonSelectedZones } from '../context/ComparisonSelectedZonesProvider';

import { TokenComparisonCardProps } from '.';

const TOKEN_CARD_OPTIONS: ButtonGroupItem<TokenProperties>[] = [
  { key: 'price', title: 'Price' },
  { key: 'marketCap', title: 'Market Cap' },
  { key: 'tradingVolume', title: 'Trading Volume' },
];
const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export function TokenComparisonCard({ className }: TokenComparisonCardProps): JSX.Element {
  const [selectedProperty, setSelectedProperty] = useState<TokenProperties>('price');

  function onTabSelected(item: { key?: TokenProperties }): void {
    item?.key && setSelectedProperty(item?.key);
  }

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.AREA);

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const onPeriodSelected = (key: PeriodKeys) => {
    setSelectedPeriod(key);
  };

  const { zones: selectedZones } = useComparisonSelectedZones();

  const { data, chart, datasetInfo, loading } = useZonesTokenComparison(
    selectedZones,
    selectedPeriod,
    selectedProperty
  );

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>Token</AnalysisCard.Title>

        <ButtonGroup
          className={styles.groupTabSelector}
          size={ElementSize.SMALL}
          buttons={TOKEN_CARD_OPTIONS}
          setSelectedButton={onTabSelected}
        />
      </AnalysisCard.Header>

      <div className={styles.chartControls}>
        <AnalysisChartTypeButtonsGroup disabled chartTypes={[ChartType.AREA, ChartType.BAR]} />
        <AnalysisPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
      </div>

      <AnalysisCardLegend className={styles.chartLegend}>
        {data?.map((item) => (
          <AnalysisLegendItem key={item.zone} className={styles.legendItem}>
            <AnalysisLegendTitle
              title={`${item.name}: ${item.symbol}`}
              circleColor={datasetInfo[item.zone].color}
            />
            <SkeletonTextWrapper loading={loading} defaultText={'$1,56'}>
              <LegendNumberValue value={item[selectedProperty]} numberType={NumberType.Currency} />
            </SkeletonTextWrapper>
          </AnalysisLegendItem>
        ))}
      </AnalysisCardLegend>

      <ChartContainer
        chartType={ChartType.AREA}
        data={chart ?? []}
        loading={loading}
        datasetInfo={datasetInfo}
        dataFormatType={NumberType.Currency}
      />
    </AnalysisCard>
  );
}
