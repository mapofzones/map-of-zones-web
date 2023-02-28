import { useState } from 'react';

import cn from 'classnames';

import { NumberFormat, NumberType, SkeletonRectangle, SkeletonTextWrapper } from 'components';
import { ChartType } from 'components/ChartContainer';
import { OverviewChartLegend } from 'components/OverviewChartCard/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCard/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewChartCard/Legend/Title/OverviewLegendTitle';
import { LegendValueBase } from 'components/OverviewChartCard/Legend/Value/LegendValueBase';
import { ZoneOverviewCard } from 'components/OverviewChartCard/ZoneOverviewCard';

import { OverviewReturnedAddressesChart } from './OverviewReturnedAddressesChart';
import { useZoneOverviewReturnedAddresses } from './useZoneOverviewReturnedAddresses';
import styles from './ZoneOverviewReturnedAddresses.module.scss';

import { ZoneOverviewReturnedAddressesProps } from '.';

export function ZoneOverviewReturnedAddresses({ className }: ZoneOverviewReturnedAddressesProps) {
  const { data, loading } = useZoneOverviewReturnedAddresses();

  return (
    <ZoneOverviewCard className={className} title="Returning Addresses">
      <OverviewChartLegend className={styles.legend}>
        <OverviewLegendItem>
          <OverviewLegendTitle
            title="Percentage and number of returning addresses since yesterday"
            tooltipText="Percentage and number of returning addresses since yesterday"
          ></OverviewLegendTitle>
          <SkeletonTextWrapper loading={loading} defaultText={'32.2 % (1 244)'}>
            <LegendValueBase size="lg">
              <NumberFormat
                value={data?.returnedRate ? data?.returnedRate * 100 : undefined}
                numberType={NumberType.Percent}
              />
              &nbsp;
              <span className={styles.additional}>
                (<NumberFormat value={data?.returnedAddresses} numberType={NumberType.Number} />)
              </span>
            </LegendValueBase>
          </SkeletonTextWrapper>
        </OverviewLegendItem>
      </OverviewChartLegend>

      <OverviewReturnedAddressesChart returnedRate={data?.returnedRate} loading={loading} />
    </ZoneOverviewCard>
  );
}
