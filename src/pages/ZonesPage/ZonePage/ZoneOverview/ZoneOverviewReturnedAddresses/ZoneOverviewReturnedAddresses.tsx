import { useState } from 'react';

import { PeriodKeys } from 'components';
import {
  AnalysisPeriodButtonsGroup,
  AnalysisCard,
  AnalysisCardLegend,
  AnalysisLegendItem,
  AnalysisLegendTitle,
  LegendValueBase,
} from 'components/AnalysisCard';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { ButtonGroup, NumberFormat, SkeletonTextWrapper } from 'ui';

import { OverviewReturnedAddressesChart } from '../../../../../components/OverviewReturnedAddressesChart';
import { chartOptions, ReturnedAddressesChartType } from './types';
import { useZoneOverviewReturnedAddresses } from './useZoneOverviewReturnedAddresses';
import styles from './ZoneOverviewReturnedAddresses.module.scss';

import { ZoneOverviewReturnedAddressesProps } from '.';

const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export const RETURNED_ADDRESSES_TITLE = 'Returned Addresses';

export function ZoneOverviewReturnedAddresses({ className }: ZoneOverviewReturnedAddressesProps) {
  const [selectedChartType, setSelectedChartType] = useState<ReturnedAddressesChartType>('total');
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const { data, loading } = useZoneOverviewReturnedAddresses(selectedPeriod);

  const dataBySelectedType =
    selectedChartType === 'ibc'
      ? {
          returnedRate: data?.ibcReturnedRate,
          returnedAddresses: data?.ibcReturnedAddresses,
          prevTotalAddresses: data?.ibcPrevTotalAddresses,
        }
      : {
          returnedRate: data?.returnedRate,
          returnedAddresses: data?.returnedAddresses,
          prevTotalAddresses: data?.prevTotalAddresses,
        };
  const { returnedRate, returnedAddresses, prevTotalAddresses } = dataBySelectedType;

  const onChartSelected = (item: { key?: ReturnedAddressesChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const onPeriodSelected = (key: PeriodKeys) => {
    setSelectedPeriod(key);
  };

  const legendTitle =
    selectedChartType === 'ibc'
      ? `IBC ${RETURNED_ADDRESSES_TITLE}`
      : `Total ${RETURNED_ADDRESSES_TITLE}`;

  const additionalInfo = `% of returning addresses in the last ${selectedPeriod} from the previous ${selectedPeriod}`;

  return (
    <AnalysisCard className={className} title={RETURNED_ADDRESSES_TITLE}>
      <AnalysisCardLegend className={styles.legend}>
        <AnalysisLegendItem>
          <AnalysisLegendTitle
            title={legendTitle}
            tooltipText={additionalInfo}
          ></AnalysisLegendTitle>
          <SkeletonTextWrapper loading={loading} defaultText={'32.2 % (1 244)'}>
            <LegendValueBase size="lg">
              <NumberFormat
                value={returnedRate !== undefined ? returnedRate * 100 : undefined}
                numberType={NumberType.Percent}
              />
            </LegendValueBase>
          </SkeletonTextWrapper>
        </AnalysisLegendItem>
      </AnalysisCardLegend>

      <span className={styles.additionalText}>{additionalInfo}</span>

      <div className={styles.chartControls}>
        <ButtonGroup
          className={styles.chartType}
          size={ElementSize.SMALL}
          buttons={chartOptions}
          setSelectedButton={onChartSelected}
        ></ButtonGroup>

        <AnalysisPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
      </div>

      <OverviewReturnedAddressesChart
        data={dataBySelectedType}
        period={selectedPeriod}
        loading={loading}
      />
    </AnalysisCard>
  );
}
