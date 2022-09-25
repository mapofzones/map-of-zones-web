import { PeriodKeys } from 'components';
import { ChartItemByString } from 'utils/helper';

export function handleChartByPeriod(
  data: ChartItemByString[] | undefined,
  period: PeriodKeys,
  key: string
) {
  if (!data || !data.length) {
    return [];
  }

  const groupsInChart = period === PeriodKeys.DAY ? 24 : period === PeriodKeys.WEEK ? 7 : 30;
  const dotsInGroup = data.length / groupsInChart;
  const newDots = [];
  for (let i = 0; i < groupsInChart; i++) {
    const group = data.splice(0, dotsInGroup);
    const groupWithoutNulls = group.filter((item: ChartItemByString) => item != null);
    const sum = groupWithoutNulls.reduce((sum, item) => sum + item[key], 0);
    const avg = sum / groupWithoutNulls.length;
    newDots.push({ [key]: avg });
  }
  return newDots;
}
