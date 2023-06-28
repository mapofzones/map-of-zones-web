import { ChartItemWithTime } from 'types/chart';

export interface TransactionChart extends ChartItemWithTime {
  time: number;
  txsCount: number;
}

interface TransactionApiResult {
  zone: string;
  totalTxsCount: number;
  chart: TransactionChart[];
}

export interface TransactionRootApiResult {
  data: TransactionApiResult;
}
