export type ZoneOverviewReturnedAddressesChartData = [
  ZoneOverviewReturnedAddressesChartDataItem,
  ZoneOverviewReturnedAddressesChartDataItem
];

export type ZoneOverviewReturnedAddressesChartDataItem = {
  period: string;
  value: number | undefined;
  valuePercent: number | undefined;
};
