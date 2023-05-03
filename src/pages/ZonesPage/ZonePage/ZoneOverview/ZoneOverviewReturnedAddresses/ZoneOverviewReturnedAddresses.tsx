import { useState } from 'react';

import { ButtonGroup, NumberFormat, NumberType, PeriodKeys, SkeletonTextWrapper } from 'components';
import { OverviewCard } from 'components/OverviewCard/OverviewCard';
import { OverviewPeriodButtonsGroup } from 'components/OverviewCard/OverviewPeriodButtonsGroup';
import { OverviewChartLegend } from 'components/OverviewChartCardWithMetadata/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCardWithMetadata/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewChartCardWithMetadata/Legend/Title/OverviewLegendTitle';
import { LegendValueBase } from 'components/OverviewChartCardWithMetadata/Legend/Value/LegendValueBase';
import { ElementSize } from 'types/ElementSize';

import { OverviewReturnedAddressesChart } from './OverviewReturnedAddressesChart';
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
    <OverviewCard className={className} title={RETURNED_ADDRESSES_TITLE}>
      <OverviewChartLegend className={styles.legend}>
        <OverviewLegendItem>
          <OverviewLegendTitle
            title={legendTitle}
            tooltipText={additionalInfo}
          ></OverviewLegendTitle>
          <SkeletonTextWrapper loading={loading} defaultText={'32.2 % (1 244)'}>
            <LegendValueBase size="lg">
              <NumberFormat
                value={returnedRate !== undefined ? returnedRate * 100 : undefined}
                numberType={NumberType.Percent}
              />
            </LegendValueBase>
          </SkeletonTextWrapper>
        </OverviewLegendItem>
      </OverviewChartLegend>

      <span className={styles.additionalText}>{additionalInfo}</span>

      <div className={styles.chartControls}>
        <ButtonGroup
          className={styles.chartType}
          size={ElementSize.SMALL}
          buttons={chartOptions}
          setSelectedButton={onChartSelected}
        ></ButtonGroup>

        <OverviewPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
      </div>

      <OverviewReturnedAddressesChart
        data={dataBySelectedType}
        period={selectedPeriod}
        loading={loading}
      />
    </OverviewCard>
  );
}
