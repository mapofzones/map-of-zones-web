import cn from 'classnames';

import {
  AnalysisCard,
  AnalysisChartTypeButtonsGroup,
  AnalysisLegendAdditionalText,
  AnalysisPeriodButtonsGroup,
} from 'components/AnalysisCard';
import { ChartContainer } from 'components/ChartContainer';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartType } from 'types/ChartType';
import { NumberType } from 'types/NumberType';
import { SkeletonTextWrapper } from 'ui';

import styles from './TransactionsComparisonCard.module.scss';
import { ZoneTransactionsResult, useTransactionsComparison } from './useTransactionsComparison';
import { useComparisonChartCardSelectedParameters } from '../hooks/useComparisonChartCardSelectedParameters';
import { useSelectedZonesDetails } from '../hooks/useSelectedZonesDetails';

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

  const { selectedZones, selectedZonesDetailsByKey } = useSelectedZonesDetails();

  const { data, charts, loading } = useTransactionsComparison(selectedZones, selectedPeriod);

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
          {data?.map((item: ZoneTransactionsResult) => {
            return (
              <AnalysisCard.Legend.Item key={item.zone} className={styles.legendItem}>
                <AnalysisCard.Legend.Item.Title
                  title={selectedZonesDetailsByKey[item.zone].title}
                  circleColor={selectedZonesDetailsByKey[item.zone].color}
                />
                <SkeletonTextWrapper loading={loading} defaultText={'$1,56'}>
                  <AnalysisCard.Legend.Item.ValueNumber
                    value={item.totalTxsCount}
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
        data={charts?.['txsCount'] ?? []}
        loading={loading}
        datasetInfo={selectedZonesDetailsByKey}
        dataFormatType={numberType}
      />
    </AnalysisCard>
  );
}
