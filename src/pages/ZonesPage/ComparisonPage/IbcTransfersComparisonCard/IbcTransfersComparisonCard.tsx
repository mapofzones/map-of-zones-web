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
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { ButtonGroup, SkeletonTextWrapper } from 'ui';
import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

import styles from './IbcTransfersComparisonCard.module.scss';
import { useZonesIbcTransfersComparison } from './useZonesIbcTransfersComparison';
import { useComparisonChartCardSelectedParameters } from '../hooks/useComparisonChartCardSelectedParameters';
import { useComparisonSelectedZones } from '../providers/ComparisonSelectedZonesProvider';

import { IbcTransfersComparisonCardProps, IbcTransfersProperties } from '.';

const IBC_VOLUME_CARD_OPTIONS: ButtonGroupItem<IbcTransfersProperties>[] = [
  { key: 'ibcTransfers', title: 'Total IBC' },
  { key: 'ibcTransfersIn', title: 'IBC In' },
  { key: 'ibcTransfersOut', title: 'IBC Out' },
];
const PERIODS: AnalysisCardPeriod[] = ['1w', '1m'];

export function IbcTransfersComparisonCard({
  className,
}: IbcTransfersComparisonCardProps): JSX.Element {
  const {
    selectedProperty,
    onPropertyTabSelected,
    selectedChartType,
    onChartTypeSelected,
    selectedPeriod,
    onPeriodSelected,
  } = useComparisonChartCardSelectedParameters<
    IbcTransfersProperties,
    AnalysisCardPeriod,
    ChartType
  >('ibcTransfers', '1w', ChartType.AREA);

  const { selectedZones, selectedZonesDetailsByKey } = useComparisonSelectedZones();

  const { data, charts, loading } = useZonesIbcTransfersComparison(selectedZones, selectedPeriod);

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header className={styles.cardHeader}>
        <AnalysisCard.Title>IBC Transfers</AnalysisCard.Title>

        <ButtonGroup
          className={styles.groupTabSelector}
          size={ElementSize.MEDIUM}
          buttons={IBC_VOLUME_CARD_OPTIONS}
          setSelectedButton={onPropertyTabSelected}
        />
      </AnalysisCard.Header>

      <AnalysisCard.ChartControls>
        <AnalysisChartTypeButtonsGroup
          chartTypes={[ChartType.AREA, ChartType.BAR]}
          onChartSelected={onChartTypeSelected}
        />
        <AnalysisPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
      </AnalysisCard.ChartControls>

      <div className={styles.legendContainer}>
        <AnalysisCard.Legend className={styles.chartLegend}>
          {data?.map((item) => (
            <AnalysisCard.Legend.Item horizontal key={item.zone} className={styles.legendItem}>
              <AnalysisCard.Legend.Item.Title
                title={`${selectedZonesDetailsByKey[item.zone]?.title}:`}
                circleColor={selectedZonesDetailsByKey[item.zone]?.color}
              />
              <SkeletonTextWrapper loading={loading} defaultText={'$1,56'}>
                <AnalysisCard.Legend.Item.ValueNumber
                  size="md"
                  value={item[selectedProperty]}
                  numberType={NumberType.Currency}
                />
              </SkeletonTextWrapper>
            </AnalysisCard.Legend.Item>
          ))}
        </AnalysisCard.Legend>

        <AnalysisLegendAdditionalText
          period={selectedPeriod}
          className={styles.legendAdditionalText}
        />
      </div>

      <ChartContainer
        chartType={selectedChartType}
        data={charts?.[selectedProperty] ?? []}
        loading={loading}
        datasetInfo={selectedZonesDetailsByKey}
        dataFormatType={NumberType.Currency}
      />
    </AnalysisCard>
  );
}
