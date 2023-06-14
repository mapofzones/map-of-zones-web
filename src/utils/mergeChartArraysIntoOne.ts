type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;

export type ArraysMapping<T, K extends { time: number }, P> = PartialRecord<
  keyof T,
  {
    from: keyof K;
    to: keyof P;
  }
>;

export const keys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

export function mergeChartArraysIntoOne<T, K extends { time: number }, P>(
  data: T | undefined,
  mapping: ArraysMapping<T, K, P>
) {
  if (!data) {
    return [];
  }

  const chartByTime: { [key: number]: any } = {};

  keys(mapping).forEach((chartName: keyof T) => {
    const chart = data[chartName] as never as K[];
    if (!chart) {
      return;
    }
    chart.forEach((value: K) => {
      if (!chartByTime[value.time]) {
        chartByTime[value.time] = {
          time: value.time,
        };
      }
      chartByTime[value.time][mapping[chartName]!.to] = value[mapping[chartName]!.from];
    });
  });

  return Object.values(chartByTime);
}

//
// ************************** DESCRIPTION **************************
//
// map data from object with several properties (chart arrays) to chart arrays with several properties according metadata
//
// METADATA object =
// {
//   chartKey1: {
//     from: 'fromProp1',
//     to: 'toProp1',
//   },
//   chartKey2: {
//     from: 'fromProp2',
//     to: 'toProp2',
//   },
//   chartKey3: {
//     from: 'fromProp3',
//     to: 'toProp3',
//   },
// }
//
// FROM object =
//
// {
// "chartKey1": [{ "fromProp1": 1, "time": 1686009600 }, { "fromProp1": 2, "time": 1686096000 }, ...],
// "chartKey2": [{ "fromProp2": 10, "time": 1686009600 }, { "fromProp2": 20, "time": 1686096000 }, ...],
// "chartKey2": [{ "fromProp3": 100, "time": 1686009600 }, { "fromProp3": 200, "time": 1686096000 }, ...],
// }
//
// TO array =
//
// [
// {time: 1686009600, toProp1: 1, toProp2: 10, toProp3: 100}
// {time: 1686096000, toProp1: 2, toProp2: 20, toProp3: 200}
// {time: 1686182400, toProp1: 3, toProp2: 30, toProp3: 300}
// {time: 1686268800, toProp1: 24574, toProp2: 7603, toProp3: 16971}
// {time: 1686355200, toProp1: 31590, toProp2: 9406, toProp3: 22184}
// {time: 1686441600, toProp1: 18397, toProp2: 6071, toProp3: 12326}
// {time: 1686528000, toProp1: 18932, toProp2: 5985, toProp3: 12947}
// {time: 1686614400, toProp1: 6611, toProp2: 2146, toProp3: 4465}
// ]

//
// ************************** EXAMPLE **************************
//
// METADATA object:
//
// {
//   ibcTransfersChart: {
//     from: 'value',
//     to: 'ibcTransfersCount',
//   },
//   ibcTransfersInChart: {
//     from: 'value',
//     to: 'ibcTransfersInCount',
//   },
//   ibcTransfersOutChart: {
//     from: 'value',
//     to: 'ibcTransfersOutCount',
//   },
// }
//
// FROM object:
//
// {
// "ibcTransfersChart": [{ "value": 26470, "time": 1686009600 }, { "value": 26470, "time": 1686009600 }, ...],
// "ibcTransfersInChart": [{ "value": 26470, "time": 1686009600 }, { "value": 26470, "time": 1686009600 }, ...],
// "ibcTransfersOutChart": [{ "value": 26470, "time": 1686009600 }, { "value": 26470, "time": 1686009600 }, ...],
// }
//
// TO array:
//
// [
// {time: 1686009600, ibcTransfersCount: 26470, ibcTransfersInCount: 8697, ibcTransfersOutCount: 17773}
// {time: 1686096000, ibcTransfersCount: 27905, ibcTransfersInCount: 8389, ibcTransfersOutCount: 19516}
// {time: 1686182400, ibcTransfersCount: 22013, ibcTransfersInCount: 7391, ibcTransfersOutCount: 14622}
// {time: 1686268800, ibcTransfersCount: 24574, ibcTransfersInCount: 7603, ibcTransfersOutCount: 16971}
// {time: 1686355200, ibcTransfersCount: 31590, ibcTransfersInCount: 9406, ibcTransfersOutCount: 22184}
// {time: 1686441600, ibcTransfersCount: 18397, ibcTransfersInCount: 6071, ibcTransfersOutCount: 12326}
// {time: 1686528000, ibcTransfersCount: 18932, ibcTransfersInCount: 5985, ibcTransfersOutCount: 12947}
// {time: 1686614400, ibcTransfersCount: 6611, ibcTransfersInCount: 2146, ibcTransfersOutCount: 4465}
// ]
