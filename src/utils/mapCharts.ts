import { ChartItemWithTime } from 'types/chart';

// map [{ zone1, chartKey1: [{ time, chartValueKey }, ...], { chartKey2: [{ time, chartValueKey }, ...] } }, { zone2, chartKey1: [{ time, }, { }, {} ] }]
//  to { chartKey1: [{time, zone1Value, zone2Value, zone3Value}, ...], chartKey2: [{time, zone1Value, zone2Value, zone3Value}, ...] }
// example: initial object
//
export function mapCharts<T extends { zone: string }, ChartKeys extends keyof T>(
  compareItems: T[],
  chartKeys: ChartKeys[],
  chartValueKey = 'value'
) {
  const charts = chartKeys.reduce((dict, chartKeyName) => {
    const chartItems = compareItems.reduce((acc, item) => {
      if (!item) {
        return acc;
      }
      const chartItem = item[chartKeyName];
      if (chartItem !== undefined && Array.isArray(chartItem)) {
        chartItem.forEach((chartItem: ChartItemWithTime) => {
          const { time } = chartItem;
          const value = chartItem[chartValueKey];
          acc[time] = acc[time] || { time };
          acc[time][item.zone] = value;
        });
      }
      return acc;
    }, {} as Record<number, ChartItemWithTime>);

    const chart = Object.values(chartItems);

    dict[chartKeyName] = chart;

    return dict;
  }, {} as Record<ChartKeys, ChartItemWithTime[]>);
  return charts;
}

//
// EXAMPLE
//
// Initial data
//
// [
//   {
//     zone: 'columbus-5',
//     ibcVolumeChart: [{ value: 41177, time: 1685491200 }, ... {}],
//     ibcVolumeInChart: [{ value: 28172, time: 1685491200 }, ... {}],
//     ibcVolumeOutChart: [{ value: 13005, time: 1685491200 }, ... {}]
//   },
//   {
//     zone: 'cosmoshub-4',
//     ibcVolumeChart: [{ value: 1234, time: 1685491200 }, ... {}],
//     ibcVolumeInChart: [{ value: 4567, time: 1685491200 }, ... {}],
//     ibcVolumeOutChart: [{ value: 7895, time: 1685491200 }, ... {}]
//   },
//   {
//     zone: 'osmosis-1',
//     ibcVolumeChart: [{ value: 12344, time: 1685491200 }, ... {}],
//     ibcVolumeInChart: [{ value: 34231, time: 1685491200 }, ... {}],
//     ibcVolumeOutChart: [{ value: 7896, time: 1685491200 }, ... {}]
//   },
// ];
//
// TO data:
//
// {
// ibcVolumeChart: [
//   {time: 1686009600, columbus-5: 96455, cosmoshub-4: 4548069, osmosis-1: 9130999}
//    ...
//   {time: 1686614400, columbus-5: 7662, cosmoshub-4: 874351, osmosis-1: 4397675}
// ]
// ibcVolumeInChart: [
//   {time: 1686009600, columbus-5: 45995, cosmoshub-4: 1525146, osmosis-1: 3024143}
//    ...
//   {time: 1686614400, columbus-5: 6835, cosmoshub-4: 410310, osmosis-1: 1323128}
// ]
// ibcVolumeOutChart: [
//   {time: 1686009600, columbus-5: 50460, cosmoshub-4: 3022923, osmosis-1: 6106856}
//    ...
//   {time: 1686614400, columbus-5: 827, cosmoshub-4: 464041, osmosis-1: 3074547}
// }
