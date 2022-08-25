export enum ChartType {
  PRICE = 'price',
  VOLUME = 'volume',
}

// eslint-disable-next-line sort-exports/sort-exports
export const chartOptions = [
  { key: ChartType.PRICE, title: 'Price' },
  { key: ChartType.VOLUME, title: 'Volume' },
];
