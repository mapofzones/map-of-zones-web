import cn from 'classnames';

import { PeriodKeys } from 'components';
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

import styles from './ReturnedAddressesComparisonCard.module.scss';
import {
  TokenProperties as ReturnedAddressesProperties,
  useZonesReturnedAddressesComparison,
} from './useZonesReturnedAddressesComparison';
import { useComparisonChartCardSelectedParameters } from '../hooks/useComparisonChartCardSelectedParameters';
import { useComparisonSelectedZones } from '../providers/ComparisonSelectedZonesProvider';

import { TokenComparisonCardProps as ReturnedAddressesComparisonCardProps } from '.';

const TOKEN_CARD_PROPERTIES_OPTIONS: ButtonGroupItem<ReturnedAddressesProperties>[] = [
  { key: 'price', title: 'Total' },
  { key: 'marketCap', title: 'IBC' },
];

const PERIODS: AnalysisCardPeriod[] = ['1w', '1m'];

export function ReturnedAddressesComparisonCard({
  className,
}: ReturnedAddressesComparisonCardProps): JSX.Element {
  const { selectedProperty, onPropertyTabSelected, selectedPeriod, onPeriodSelected } =
    useComparisonChartCardSelectedParameters<
      ReturnedAddressesProperties,
      AnalysisCardPeriod,
      ChartType
    >('price', '1w', ChartType.BAR);

  const { selectedZones, selectedZonesDetailsByKey } = useComparisonSelectedZones();

  const { data, chart, loading } = useZonesReturnedAddressesComparison(
    selectedZones,
    selectedPeriod,
    selectedProperty
  );

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>Returned Addresses</AnalysisCard.Title>

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
              title={`${selectedZonesDetailsByKey[item.zone].title}: ${item.symbol}`}
              circleColor={selectedZonesDetailsByKey[item.zone].color}
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
        datasetInfo={selectedZonesDetailsByKey}
        dataFormatType={NumberType.Currency}
      />
    </AnalysisCard>
  );
}
