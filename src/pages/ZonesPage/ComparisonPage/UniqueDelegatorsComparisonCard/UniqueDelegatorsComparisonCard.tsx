import cn from 'classnames';

import {
  AnalysisCard,
  AnalysisChartTypeButtonsGroup,
  AnalysisLegendAdditionalText,
  AnalysisPeriodButtonsGroup,
} from 'components/AnalysisCard';
import { ChartContainer } from 'components/ChartContainer';
import { OVERVIEW_PERIODS_API_KEYS } from 'components/OverviewChartCardWithMetadata';
import { useGetUniqueDelegatorsComparisonQuery } from 'services/ComparisonPage/GetUniqueDelegatorsComparison';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartType } from 'types/ChartType';
import { UNIQUE_DELEGATORS_TITLE } from 'types/constants/AnalysisTitles';
import { NumberType } from 'types/NumberType';
import { SkeletonTextWrapper } from 'ui';

import styles from './UniqueDelegatorsComparisonCard.module.scss';
import { UniqueDelegatorsComparisonCardProps } from './UniqueDelegatorsComparisonCard.props';
import { ZoneUniqueDelegatorsComparisonData } from './useUniqueDelegatorsComparison';
import { useComparisonChartCardSelectedParameters } from '../hooks/useComparisonChartCardSelectedParameters';
import { useComparisonSelectedZones } from '../providers/ComparisonSelectedZonesProvider';

const PERIODS: AnalysisCardPeriod[] = ['1w', '1m'];

const numberType = NumberType.Number;

export function UniqueDelegatorsComparisonCard({
  className,
}: UniqueDelegatorsComparisonCardProps): JSX.Element {
  const { selectedChartType, onChartTypeSelected, selectedPeriod, onPeriodSelected } =
    useComparisonChartCardSelectedParameters<undefined, AnalysisCardPeriod, ChartType>(
      undefined,
      '1w',
      ChartType.AREA
    );

  const { selectedZones, selectedZonesDetailsByKey } = useComparisonSelectedZones();

  const { data, isLoading: loading } = useGetUniqueDelegatorsComparisonQuery(
    {
      zones: selectedZones,
      period: OVERVIEW_PERIODS_API_KEYS[selectedPeriod],
    },
    { skip: !selectedZones?.length }
  );

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>{UNIQUE_DELEGATORS_TITLE}</AnalysisCard.Title>
      </AnalysisCard.Header>

      <AnalysisCard.ChartControls>
        <AnalysisChartTypeButtonsGroup
          chartTypes={[ChartType.AREA, ChartType.BAR]}
          onChartSelected={onChartTypeSelected}
        />
        <AnalysisPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
      </AnalysisCard.ChartControls>

      <div className={styles.legendContainer}>
        <AnalysisCard.Legend>
          {data?.data?.map((item: ZoneUniqueDelegatorsComparisonData) => {
            return (
              <AnalysisCard.Legend.Item key={item.zone} className={styles.legendItem}>
                <AnalysisCard.Legend.Item.Title
                  title={selectedZonesDetailsByKey[item.zone]?.title}
                  circleColor={selectedZonesDetailsByKey[item.zone]?.color}
                />
                <SkeletonTextWrapper loading={loading} defaultText={'$1,56'}>
                  <AnalysisCard.Legend.Item.ValueNumber
                    value={item.totalDelegatorsCount}
                    numberType={numberType}
                  />
                </SkeletonTextWrapper>
              </AnalysisCard.Legend.Item>
            );
          })}
        </AnalysisCard.Legend>

        <AnalysisLegendAdditionalText
          period={selectedPeriod}
          className={styles.legendAdditionalText}
        />
      </div>

      <ChartContainer
        chartType={selectedChartType}
        data={data?.charts?.['delegatorsCount'] ?? []}
        loading={loading}
        datasetInfo={selectedZonesDetailsByKey}
        dataFormatType={numberType}
      />
    </AnalysisCard>
  );
}
