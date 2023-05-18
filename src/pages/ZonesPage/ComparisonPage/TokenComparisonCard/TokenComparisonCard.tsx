import cn from 'classnames';

import { PeriodKeys } from 'components';
import {
  AnalysisCard,
  AnalysisChartTypeButtonsGroup,
  AnalysisPeriodButtonsGroup,
} from 'components/AnalysisCard';
import { ChartContainer } from 'components/ChartContainer';
import { ChartType } from 'types/ChartType';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { ButtonGroup, SkeletonTextWrapper } from 'ui';
import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

import styles from './TokenComparisonCard.module.scss';
import { TokenProperties, useZonesTokenComparison } from './useZonesTokenComparison';
import { useComparisonSelectedZones } from '../context/ComparisonSelectedZonesProvider';
import { useComparisonChartCardSelectedParameters } from '../hooks/useComparisonChartCardSelectedParameters';

import { TokenComparisonCardProps } from '.';

const TOKEN_CARD_PROPERTIES_OPTIONS: ButtonGroupItem<TokenProperties>[] = [
  { key: 'price', title: 'Price' },
  { key: 'marketCap', title: 'Market Cap' },
  { key: 'tradingVolume', title: 'Trading Volume' },
];
const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export function TokenComparisonCard({ className }: TokenComparisonCardProps): JSX.Element {
  const { selectedProperty, onPropertyTabSelected, selectedPeriod, onPeriodSelected } =
    useComparisonChartCardSelectedParameters<TokenProperties, PeriodKeys, ChartType>(
      'price',
      PeriodKeys.DAY,
      ChartType.AREA
    );

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
          buttons={TOKEN_CARD_PROPERTIES_OPTIONS}
          setSelectedButton={onPropertyTabSelected}
        />
      </AnalysisCard.Header>

      <AnalysisCard.ChartControls>
        <AnalysisChartTypeButtonsGroup disabled chartTypes={[ChartType.AREA, ChartType.BAR]} />
        <AnalysisPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
      </AnalysisCard.ChartControls>

      <AnalysisCard.Legend className={styles.chartLegend}>
        {data?.map((item) => (
          <AnalysisCard.Legend.Item key={item.zone} className={styles.legendItem}>
            <AnalysisCard.Legend.Item.Title
              title={`${item.name}: ${item.symbol}`}
              circleColor={datasetInfo[item.zone].color}
            />
            <SkeletonTextWrapper loading={loading} defaultText={'$1,56'}>
              <AnalysisCard.Legend.Item.ValueNumber
                value={item[selectedProperty]}
                numberType={NumberType.Currency}
              />
            </SkeletonTextWrapper>
          </AnalysisCard.Legend.Item>
        ))}
      </AnalysisCard.Legend>

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
