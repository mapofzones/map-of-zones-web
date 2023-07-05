import cn from 'classnames';

import {
  AnalysisCard,
  AnalysisChartTypeButtonsGroup,
  AnalysisPeriodButtonsGroup,
} from 'components/AnalysisCard';
import { ChartContainer } from 'components/ChartContainer';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartType } from 'types/ChartType';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { ButtonGroup, SkeletonTextWrapper } from 'ui';
import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

import styles from './IbcVolumeComparisonCard.module.scss';
import { useZonesIbcVolumeComparison } from './useZonesIbcVolumeComparison';
import { useComparisonChartCardSelectedParameters } from '../hooks/useComparisonChartCardSelectedParameters';
import { useComparisonSelectedZones } from '../providers/ComparisonSelectedZonesProvider';

import { IbcVolumeComparisonCardProps, IbcVolumeProperties } from '.';

const IBC_VOLUME_CARD_OPTIONS: ButtonGroupItem<IbcVolumeProperties>[] = [
  { key: 'ibcVolume', title: 'Total IBC' },
  { key: 'ibcVolumeIn', title: 'IBC In' },
  { key: 'ibcVolumeOut', title: 'IBC Out' },
];
const PERIODS: AnalysisCardPeriod[] = ['1w', '1m'];

export function IbcVolumeComparisonCard({ className }: IbcVolumeComparisonCardProps): JSX.Element {
  const {
    selectedProperty,
    onPropertyTabSelected,
    selectedChartType,
    onChartTypeSelected,
    selectedPeriod,
    onPeriodSelected,
  } = useComparisonChartCardSelectedParameters<IbcVolumeProperties, AnalysisCardPeriod, ChartType>(
    'ibcVolume',
    '1w',
    ChartType.AREA
  );

  const { selectedZones, selectedZonesDetailsByKey } = useComparisonSelectedZones();

  const { data, charts, loading } = useZonesIbcVolumeComparison(selectedZones, selectedPeriod);

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header className={styles.cardHeader}>
        <AnalysisCard.Title>IBC Volume</AnalysisCard.Title>

        <ButtonGroup
          className={styles.groupTabSelector}
          size={ElementSize.SMALL}
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

      <AnalysisCard.Legend className={styles.chartLegend}>
        {data?.map((item) => (
          <AnalysisCard.Legend.Item key={item.zone} className={styles.legendItem}>
            <AnalysisCard.Legend.Item.Title
              title={selectedZonesDetailsByKey[item.zone]?.title}
              circleColor={selectedZonesDetailsByKey[item.zone]?.color}
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
        chartType={selectedChartType}
        data={charts?.[selectedProperty] ?? []}
        loading={loading}
        datasetInfo={selectedZonesDetailsByKey}
        dataFormatType={NumberType.Currency}
      />
    </AnalysisCard>
  );
}
