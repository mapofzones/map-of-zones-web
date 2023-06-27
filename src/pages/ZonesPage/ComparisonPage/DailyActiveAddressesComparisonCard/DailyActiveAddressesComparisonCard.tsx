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

import styles from './DailyActiveAddressesComparisonCard.module.scss';
import {
  DailyActiveAddressesComparisonCardProps,
  DailyActiveAddressesProperties,
} from './DailyActiveAddressesComparisonCard.props';
import {
  ZoneDailyActiveAddressesItem,
  useDailyActiveAddressesComparison,
} from './useDailyActiveAddressesComparison';
import { useComparisonChartCardSelectedParameters } from '../hooks/useComparisonChartCardSelectedParameters';
import { useSelectedZonesDetails } from '../hooks/useSelectedZonesDetails';

const DAILY_ACTIVE_ADDRESSES_CARD_OPTIONS: ButtonGroupItem<DailyActiveAddressesProperties>[] = [
  { key: 'activeAddressesCount', title: 'Active Addresses' },
  { key: 'ibcActiveAddressesCount', title: 'Active IBC Addresses' },
];

const TOTAL_PROP_NAME_BY_SELECTED_PROP: Record<
  DailyActiveAddressesProperties,
  keyof ZoneDailyActiveAddressesItem
> = {
  activeAddressesCount: 'totalActiveAddresses',
  ibcActiveAddressesCount: 'totalIbcActiveAddresses',
};

const PERIODS: AnalysisCardPeriod[] = ['1w', '1m'];

const numberType = NumberType.Number;

export function DailyActiveAddressesComparisonCard({
  className,
}: DailyActiveAddressesComparisonCardProps): JSX.Element {
  const {
    selectedProperty,
    onPropertyTabSelected,
    selectedChartType,
    onChartTypeSelected,
    selectedPeriod,
    onPeriodSelected,
  } = useComparisonChartCardSelectedParameters<
    DailyActiveAddressesProperties,
    AnalysisCardPeriod,
    ChartType
  >('activeAddressesCount', '1w', ChartType.AREA);

  const { selectedZones, selectedZonesDetailsByKey } = useSelectedZonesDetails();

  const { data, charts, loading } = useDailyActiveAddressesComparison(
    selectedZones,
    selectedPeriod
  );

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>Daily Active Addresses</AnalysisCard.Title>

        <ButtonGroup
          className={styles.groupTabSelector}
          size={ElementSize.SMALL}
          buttons={DAILY_ACTIVE_ADDRESSES_CARD_OPTIONS}
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

      <AnalysisCard.Legend className={styles.legendContainer}>
        {data?.map((item: ZoneDailyActiveAddressesItem) => {
          return (
            <AnalysisCard.Legend.Item key={item.zone} className={styles.legendItem}>
              <AnalysisCard.Legend.Item.Title
                title={selectedZonesDetailsByKey[item.zone].title}
                circleColor={selectedZonesDetailsByKey[item.zone].color}
              />
              <SkeletonTextWrapper loading={loading} defaultText={'$1,56'}>
                <AnalysisCard.Legend.Item.ValueNumber
                  value={item[TOTAL_PROP_NAME_BY_SELECTED_PROP[selectedProperty]] as number}
                  numberType={numberType}
                />
              </SkeletonTextWrapper>
            </AnalysisCard.Legend.Item>
          );
        })}
      </AnalysisCard.Legend>

      <ChartContainer
        chartType={selectedChartType}
        data={charts?.[selectedProperty] ?? []}
        loading={loading}
        datasetInfo={selectedZonesDetailsByKey}
        dataFormatType={numberType}
      />
    </AnalysisCard>
  );
}
