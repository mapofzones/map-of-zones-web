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
// Initial data
//
// [
//   {
//     zone: 'columbus-5',
//     ibcVolumeChart: [
//       {
//         value: 41177,
//         time: 1685491200,
//       },
//       ...
//     ],
//     ibcVolumeInChart: [
//       {
//         value: 28172,
//         time: 1685491200,
//       },
//       ...
//     ],
//     ibcVolumeOutChart: [
//       {
//         value: 13005,
//         time: 1685491200,
//       },
//       ...
//     ],
//   },
//   {
//     zone: 'cosmoshub-4',
//     ibcVolumeChart: [
//       {
//         value: 3222327,
//         time: 1685491200,
//       },
//       ...
//     ],
//     ibcVolumeInChart: [
//       {
//         value: 1426746,
//         time: 1685491200,
//       },
//       ...
//     ],
//     ibcVolumeOutChart: [
//       {
//         value: 1795581,
//         time: 1685491200,
//       },
//       ...
//     ],
//   },
//   {
//     zone: 'osmosis-1',
//     ibcVolumeChart: [
//       {
//         value: 10207700,
//         time: 1685491200,
//       },
//       ...
//     ],
//     ibcVolumeInChart: [
//       {
//         __typename: 'flat_blockchain_tf_switched_charts',
//         value: 2218406,
//         time: 1685491200,
//       },
//       ...
//     ],
//     ibcVolumeOutChart: [
//       {
//         __typename: 'flat_blockchain_tf_switched_charts',
//         value: 7989294,
//         time: 1685491200,
//       },
//       ...
//     ],
//   },
// ];
