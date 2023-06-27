import cn from 'classnames';

import { PeriodKeys } from 'components';
import {
  AnalysisCard,
  AnalysisChartTypeButtonsGroup,
  AnalysisPeriodButtonsGroup,
} from 'components/AnalysisCard';
import { AnalysisReturnedAddressesChart } from 'components/AnalysisReturnedAddressesChart';
import { ChartType } from 'types/ChartType';
import { RETURNED_ADDRESSES_TITLE } from 'types/constants/AnalysisTitles';
import { ElementSize } from 'types/ElementSize';
import {
  RETURNED_ADDRESSES_PROPERTIES_OPTIONS,
  ReturnedAddressesCardProperties,
} from 'types/models/Analysis/ZoneAnalysisReturnedAddressesData';
import { NumberType } from 'types/NumberType';
import { ButtonGroup, SkeletonTextWrapper } from 'ui';

import styles from './ReturnedAddressesComparisonCard.module.scss';
import { useZonesReturnedAddressesComparison } from './useZonesReturnedAddressesComparison';
import { useComparisonChartCardSelectedParameters } from '../hooks/useComparisonChartCardSelectedParameters';
import { useSelectedZonesDetails } from '../hooks/useSelectedZonesDetails';

import { TokenComparisonCardProps as ReturnedAddressesComparisonCardProps } from '.';

const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export function ReturnedAddressesComparisonCard({
  className,
}: ReturnedAddressesComparisonCardProps): JSX.Element {
  const { selectedProperty, onPropertyTabSelected, selectedPeriod, onPeriodSelected } =
    useComparisonChartCardSelectedParameters<
      ReturnedAddressesCardProperties,
      PeriodKeys,
      ChartType
    >('total', PeriodKeys.DAY, ChartType.BAR);

  const { selectedZones, selectedZonesDetailsByKey } = useSelectedZonesDetails();

  const { data, loading } = useZonesReturnedAddressesComparison(selectedZones, selectedPeriod);

  const isIbc = selectedProperty === 'ibc';
  const dataBySelectedType =
    data?.map((item) => ({
      returnedRate: isIbc ? item?.ibcReturnedRate : item?.returnedRate,
      returnedAddresses: isIbc ? item?.ibcReturnedAddresses : item?.returnedAddresses,
      prevTotalAddresses: isIbc ? item?.ibcPrevTotalAddresses : item?.prevTotalAddresses,
    })) ?? [];

  const legendTitle = isIbc
    ? `IBC ${RETURNED_ADDRESSES_TITLE}`
    : `Total ${RETURNED_ADDRESSES_TITLE}`;

  const additionalInfo = `% of returning addresses in the last ${selectedPeriod} from the previous ${selectedPeriod}`;

  return (
    <AnalysisCard className={cn(className, styles.container)}>
      <AnalysisCard.Header>
        <AnalysisCard.Title>Returned Addresses</AnalysisCard.Title>

        <ButtonGroup
          className={styles.groupTabSelector}
          size={ElementSize.SMALL}
          buttons={RETURNED_ADDRESSES_PROPERTIES_OPTIONS}
          setSelectedButton={onPropertyTabSelected}
        />
      </AnalysisCard.Header>

      <AnalysisCard.ChartControls>
        <AnalysisChartTypeButtonsGroup disabled chartTypes={[ChartType.AREA, ChartType.BAR]} />
        <AnalysisPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
      </AnalysisCard.ChartControls>

      <div className={styles.chartLegend}>
        <AnalysisCard.Legend>
          {data?.map((item, index) => {
            return (
              <AnalysisCard.Legend.Item key={item.zone} className={styles.legendItem}>
                <AnalysisCard.Legend.Item.Title
                  title={selectedZonesDetailsByKey[item.zone].title}
                  circleColor={selectedZonesDetailsByKey[item.zone].color}
                />
                <SkeletonTextWrapper loading={loading} defaultText={'$1,56'}>
                  <AnalysisCard.Legend.Item.ValueNumber
                    value={
                      dataBySelectedType[index]?.returnedRate !== undefined
                        ? dataBySelectedType[index].returnedRate! * 100
                        : undefined
                    }
                    numberType={NumberType.Percent}
                  />
                </SkeletonTextWrapper>
              </AnalysisCard.Legend.Item>
            );
          })}
        </AnalysisCard.Legend>

        <span className={styles.additionalText}>{additionalInfo}</span>
      </div>

      <AnalysisReturnedAddressesChart
        data={dataBySelectedType}
        period={selectedPeriod}
        loading={loading}
        metadata={Object.values(selectedZonesDetailsByKey)}
      />
    </AnalysisCard>
  );
}
