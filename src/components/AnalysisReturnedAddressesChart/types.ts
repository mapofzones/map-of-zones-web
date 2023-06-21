export type ZoneAnalysisReturnedAddressesChartData = ZoneAnalysisReturnedAddressesChartDataItem[];

export type ZoneAnalysisReturnedAddressesChartDataItem = {
  prevPeriod: string;
  prevValue: number | undefined;
  prevValuePercent: number | undefined;
  period: string;
  value: number | undefined;
  valuePercent: number | undefined;
};
