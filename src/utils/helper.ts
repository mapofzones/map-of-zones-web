interface ChartItemByNumber {
  [key: number]: number;
}

export interface ChartItemByString {
  [key: string]: number;
}

interface ZoneItemForSearch {
  name: string;
}

export function searchZonesByName<T extends ZoneItemForSearch>(
  zones: T[],
  searchValue: string
): T[] {
  return zones?.filter((zone) => zone.name.toLowerCase().includes(searchValue.toLowerCase()));
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
