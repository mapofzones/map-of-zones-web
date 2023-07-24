import cn from 'classnames';

import {
  AnalysisCard,
  AnalysisChartTypeButtonsGroup,
  AnalysisLegendAdditionalText,
  AnalysisPeriodButtonsGroup,
} from 'components/AnalysisCard';
import { ChartContainer } from 'components/ChartContainer';
import { OVERVIEW_PERIODS_API_KEYS } from 'components/OverviewChartCardWithMetadata';
import { useGetTransactionsChartQuery } from 'services/ComparisonPage/GetTransactionsChart';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartType } from 'types/ChartType';
import { NumberType } from 'types/NumberType';
import { SkeletonTextWrapper } from 'ui';

import styles from './TransactionsComparisonCard.module.scss';
import { useComparisonChartCardSelectedParameters } from '../hooks/useComparisonChartCardSelectedParameters';
import { useComparisonSelectedZones } from '../providers/ComparisonSelectedZonesProvider';

import { TransactionsComparisonCardProps } from '.';

const PERIODS: AnalysisCardPeriod[] = ['1w', '1m'];

const numberType = NumberType.Number;

export function TransactionsComparisonCard({
  className,
}: TransactionsComparisonCardProps): JSX.Element {
  const { selectedChartType, onChartTypeSelected, selectedPeriod, onPeriodSelected } =
    useComparisonChartCardSelectedParameters<undefined, AnalysisCardPeriod, ChartType>(
      undefined,
      '1w',
      ChartType.AREA
    );

  const { selectedZones, selectedZonesDetailsByKey } = useComparisonSelectedZones();

  const { data, isLoading: loading } = useGetTransactionsChartQuery(
    {
      zones: selectedZones,
      period: OVERVIEW_PERIODS_API_KEYS[selectedPeriod],
    },
    { skip: !selectedZones?.length }
  );

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>Transactions</AnalysisCard.Title>
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
          {data?.data?.map((item) => {
            return (
              <AnalysisCard.Legend.Item horizontal key={item.zone} className={styles.legendItem}>
                <AnalysisCard.Legend.Item.Title
                  size="md"
                  title={`${selectedZonesDetailsByKey[item.zone]?.title}:`}
                  circleColor={selectedZonesDetailsByKey[item.zone]?.color}
                />
                <SkeletonTextWrapper loading={loading} defaultText={'$1,56'}>
                  <AnalysisCard.Legend.Item.ValueNumber
                    size="md"
                    value={item.totalTxsCount}
                    numberType={numberType}
                    compact
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
        data={data?.charts?.['txsCount'] ?? []}
        loading={loading}
        datasetInfo={selectedZonesDetailsByKey}
        dataFormatType={numberType}
      />
    </AnalysisCard>
  );
}
