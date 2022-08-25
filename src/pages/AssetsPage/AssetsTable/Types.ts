import { Align } from 'components/Table/TableHeader/TableHeaderItem/TableHeaderItem.props';

export enum ColumnKeys {
  MarketCap = 'marketCap',
  Price = 'price',
  Price24hPercent = 'price24hPercent',
  Price7dPercent = 'price7dPercent',
  Volume24h = 'volume24h',
  Volume24hPercent = 'volume24hPercent',
  Supply = 'supply',
}

export const SORTING_COLUMN_KEYS: Record<ColumnKeys, string> = {
  [ColumnKeys.MarketCap]: 'marketCap',
  [ColumnKeys.Price]: 'price',
  [ColumnKeys.Price24hPercent]: '24h % price',
  [ColumnKeys.Price7dPercent]: '7d % price',
  [ColumnKeys.Volume24h]: '24h volume',
  [ColumnKeys.Volume24hPercent]: '24h % volume',
  [ColumnKeys.Supply]: 'supply',
};

export const TABLE_HEADER_CONFIG = [
  {
    title: '#',
    align: Align.Center,
    isSticky: true,
  },
  {
    title: 'Name',
    align: Align.Left,
    isSticky: true,
  },
  {
    title: 'Price',
    columnKey: ColumnKeys.Price,
  },
  {
    title: '24h % Price',
    columnKey: ColumnKeys.Price24hPercent,
  },
  {
    title: '7d % Price',
    columnKey: ColumnKeys.Price7dPercent,
  },
  {
    title: 'Market Cap',
    columnKey: ColumnKeys.MarketCap,
    explanationText: 'Test text',
  },
  {
    title: '24h Volume',
    columnKey: ColumnKeys.Volume24h,
  },
  {
    title: '24h % Volume',
    columnKey: ColumnKeys.Volume24hPercent,
  },
  {
    title: 'Supply',
    explanationText: 'Test text',
    columnKey: ColumnKeys.Supply,
  },
  {
    title: 'Last 7 Days',
  },
];
