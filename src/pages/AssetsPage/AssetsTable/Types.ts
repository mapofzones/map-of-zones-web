import { Align } from 'components/Table/TableHeader/TableHeaderItem/TableHeaderItem.props';

export enum ColumnKeys {
  MarketCap = 'marketCap',
}

export const SORTING_COLUMN_KEYS: Record<ColumnKeys, string> = {
  [ColumnKeys.MarketCap]: 'marketCap',
};

export const TABLE_HEADER_CONFIG = [
  {
    title: '#',
    align: Align.Center,
  },
  {
    title: 'Name',
    align: Align.Left,
  },
  {
    title: 'Price',
  },
  {
    title: '24h % Price',
  },
  {
    title: '7d % Price',
  },
  {
    title: 'Market Cap',
    columnKey: ColumnKeys.MarketCap,
    explanationText: 'Test text',
  },
  {
    title: '24h Volume',
  },
  {
    title: '24h % Volume',
  },
  {
    title: 'Supply',
    explanationText: 'Test text',
  },
  {
    title: 'Last 7 Days',
  },
];
