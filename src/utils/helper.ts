import { PeriodKeys } from './../components/PeriodSelector/Types';
interface ChartItemByNumber {
  [key: number]: number;
}

export interface ChartItemByString {
  [key: string]: number;
}

export function getDauTitleByPeriod(period: PeriodKeys) {
  return period === PeriodKeys.WEEK ? 'WAU' : period === PeriodKeys.MONTH ? 'MAU' : 'DAU';
}

export function getIbcDauTitleByPeriod(period: PeriodKeys) {
  return `IBC ${getDauTitleByPeriod(period)}`;
}

export function openInNewTab(url: string): void {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
}

export const transformChartData = (chartData: ChartItemByNumber[], keyName: string) => {
  if (!chartData) {
    return undefined;
  }

  const data = chartData.reduce((newArray: ChartItemByString[], currValue: ChartItemByNumber) => {
    const index = +Object.keys(currValue)[0];
    newArray[index] = { [keyName]: currValue[index] } as ChartItemByString;
    return newArray;
  }, [] as ChartItemByString[]);
  return data;
};
