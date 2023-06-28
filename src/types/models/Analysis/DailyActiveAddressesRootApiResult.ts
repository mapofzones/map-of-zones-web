import { ChartItemWithTime } from 'types/chart';

export interface DailyActiveAddressesChart extends ChartItemWithTime {
  time: number;
  activeAddressesCount: number;
  ibcActiveAddressesCount: number;
}

interface DailyActiveAddressesApiResult {
  zone: string;
  totalActiveAddresses?: number;
  totalIbcActiveAddresses?: number;
  chart: DailyActiveAddressesChart[];
}

export interface DailyActiveAddressesRootApiResult {
  data: DailyActiveAddressesApiResult;
}
