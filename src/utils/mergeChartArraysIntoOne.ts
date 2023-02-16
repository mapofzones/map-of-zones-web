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
