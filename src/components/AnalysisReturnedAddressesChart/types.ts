export type ZoneAnalysisReturnedAddressesChartData = [
  ZoneAnalysisReturnedAddressesChartDataItem,
  ZoneAnalysisReturnedAddressesChartDataItem
];

export type ZoneAnalysisReturnedAddressesChartDataItem = {
  period: string;
  value: number | undefined;
  valuePercent: number | undefined;
};
