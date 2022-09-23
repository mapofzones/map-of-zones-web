import { PeriodKeys } from 'components';

import { ZoneOverviewTokenData } from './useZoneOverviewToken';

export enum ChartType {
  PRICE = 'price',
  VOLUME = 'volume',
}

// eslint-disable-next-line sort-exports/sort-exports
export const chartOptions = [
  { key: ChartType.PRICE, title: 'Price' },
  { key: ChartType.VOLUME, title: 'Trading Volume' },
];

export const priceDiffKeyByPeriod: Record<PeriodKeys, keyof ZoneOverviewTokenData> = {
  [PeriodKeys.DAY]: 'priceDayDiffPercent',
  [PeriodKeys.WEEK]: 'priceWeekDiffPercent',
  [PeriodKeys.MONTH]: 'priceMonthDiffPercent',
};
