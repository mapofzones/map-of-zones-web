import { useState } from 'react';

import cn from 'classnames';

import { ButtonGroup, NumberFormat, NumberType, PeriodKeys, SkeletonTextWrapper } from 'components';
import { OverviewChartLegend } from 'components/OverviewChartCard/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCard/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewChartCard/Legend/Title/OverviewLegendTitle';
import { LegendValueBase } from 'components/OverviewChartCard/Legend/Value/LegendValueBase';
import { OverviewPeriodButtonsGroup } from 'components/OverviewChartCard/OverviewPeriodButtonsGroup';
import { ZoneOverviewCard } from 'components/OverviewChartCard/ZoneOverviewCard';
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
  console.log(returnedRate, 'returnedRate');

  const onChartSelected = (item: { key?: ReturnedAddressesChartType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const onPeriodSelected = (key: PeriodKeys) => {
    setSelectedPeriod(key);
  };

  return (
    <ZoneOverviewCard className={className} title={RETURNED_ADDRESSES_TITLE}>
      <OverviewChartLegend className={styles.legend}>
        <OverviewLegendItem>
          <OverviewLegendTitle
            title={RETURNED_ADDRESSES_TITLE}
            tooltipText="Returned Addresses"
          ></OverviewLegendTitle>
          <SkeletonTextWrapper loading={loading} defaultText={'32.2 % (1 244)'}>
            <LegendValueBase size="lg">
              <NumberFormat
                value={returnedRate !== undefined ? returnedRate * 100 : undefined}
                numberType={NumberType.Percent}
              />
              &nbsp;
              <span className={styles.additional}>
                (<NumberFormat value={returnedAddresses} /> /{' '}
                <NumberFormat value={prevTotalAddresses} />)
              </span>
            </LegendValueBase>
          </SkeletonTextWrapper>
        </OverviewLegendItem>
      </OverviewChartLegend>

      <span className={styles.additionalText}>
        Percentage and number of returning addresses in the last {selectedPeriod} from the previous{' '}
        {selectedPeriod}
      </span>

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
    </ZoneOverviewCard>
  );
}
