import { ChartItemWithTime } from 'types/chart';

interface OriginalRestApiItem {
  zone: string;
  chart: ChartItemWithTime[];
}

// { "osmosis-1": 123, "cosmoshub-4": 456 }
type ValuesByZonesRecord<T extends ChartItemWithTime[], P extends keyof T[number]> = Record<
  string,
  T[number][P]
>;

// 1686009600: { "osmosis-1": 123, "cosmoshub-4": 456 }
// 1686614400: { "osmosis-1": 3, "cosmoshub-4": 6 }
type ValuesByZonesRecordByTimeMap<T extends ChartItemWithTime[], P extends keyof T[number]> = Map<
  number,
  ValuesByZonesRecord<T, P>
>;

// { time: 1686009600, "osmosis-1": 123, "cosmoshub-4": 456 }
type ValuesByZonesRecordChartItem<T extends ChartItemWithTime[], P extends keyof T[number]> =
  | ValuesByZonesRecord<T, P>
  | { time: number };

type MappedArray<T extends ChartItemWithTime[]> = {
  [P in keyof T[number]]: ValuesByZonesRecordByTimeMap<T, P>;
};

export type MappedComparisonResult<T extends ChartItemWithTime[]> = {
  [P in keyof T[number]]: ValuesByZonesRecordChartItem<T, P>[];
};

export function mapComparisonRestApiChartsData<
  K extends OriginalRestApiItem,
  T extends ChartItemWithTime[]
>(originalArray: K[]): MappedComparisonResult<T> {
  const mappedArray: MappedArray<T> = {} as MappedArray<T>;

  originalArray.forEach((originalArrayItem: K) => {
    originalArrayItem.chart.forEach((chartItem: ChartItemWithTime) => {
      const { time, ...properties } = chartItem;
      for (const prop in properties) {
        if (!mappedArray[prop as keyof MappedArray<T>]) {
          mappedArray[prop as keyof MappedArray<T>] = new Map<
            number,
            Record<string, T[number][typeof prop]>
          >();
        }
        const propMap = mappedArray[prop as keyof MappedArray<T>];
        const propRecord = propMap.get(time) || {};
        propRecord[originalArrayItem.zone] = chartItem[
          prop as keyof ChartItemWithTime
        ] as T[number][keyof T[number]];
        propMap.set(time, propRecord);
      }
    });
  });

  const result: MappedComparisonResult<T> = {} as MappedComparisonResult<T>;

  for (const prop in mappedArray) {
    const propMap = mappedArray[prop]; // Map(123400, { osmosis-1: 134, cosmoshub-4: 345 })
    result[prop as keyof MappedComparisonResult<T>] = Array.from(propMap.entries()).map((entry) => {
      return { time: entry[0], ...entry[1] };
    });
  }

  return result;
}

// FROM:
//
// [
//  {
//    zone: "columbus-5",
//    chart: [
//      {time: 1686009600, activeAddressesCount: 9100, ibcActiveAddressesCount: 63}
//      {time: 1686009600, activeAddressesCount: 9100, ibcActiveAddressesCount: 63}
//      {time: 1686096000, activeAddressesCount: 8899, ibcActiveAddressesCount: 40}
//      {time: 1686182400, activeAddressesCount: 8778, ibcActiveAddressesCount: 31}
//      {time: 1686268800, activeAddressesCount: 8397, ibcActiveAddressesCount: 39}
//      {time: 1686355200, activeAddressesCount: 8726, ibcActiveAddressesCount: 54}
//      {time: 1686441600, activeAddressesCount: 8539, ibcActiveAddressesCount: 40}
//      {time: 1686528000, activeAddressesCount: 8467, ibcActiveAddressesCount: 38}
//      {time: 1686614400, activeAddressesCount: 315, ibcActiveAddressesCount: 2}
//    ]
//  },
//  {
//    zone: "osmosis-1",
//    chart: [
//      {time: 1686009600, activeAddressesCount: 10100, ibcActiveAddressesCount: 163}
//      {time: 1686009600, activeAddressesCount: 19100, ibcActiveAddressesCount: 163}
//      {time: 1686096000, activeAddressesCount: 18899, ibcActiveAddressesCount: 140}
//      {time: 1686182400, activeAddressesCount: 18778, ibcActiveAddressesCount: 131}
//      {time: 1686268800, activeAddressesCount: 18397, ibcActiveAddressesCount: 139}
//      {time: 1686355200, activeAddressesCount: 18726, ibcActiveAddressesCount: 154}
//      {time: 1686441600, activeAddressesCount: 18539, ibcActiveAddressesCount: 140}
//      {time: 1686528000, activeAddressesCount: 18467, ibcActiveAddressesCount: 138}
//      {time: 1686614400, activeAddressesCount: 1315, ibcActiveAddressesCount: 12}
//    ]
//  }
// ]
//
// TO:
//
// {
//    activeAddressesCount: [{ time: 1686009600, "columbus-5": 9100, "osmosis-1": 10100 }, ... { time: 1686614400, "columbus-5": 315, "osmosis-1": 1315 }]
//    ibcActiveAddressesCount: [{ time: 1686009600, "columbus-5": 63, "osmosis-1": 163 }, ... { time: 1686614400, "columbus-5": 2, "osmosis-1": 12 }]
//}
