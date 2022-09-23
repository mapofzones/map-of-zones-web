import { Align } from 'components/Table/TableHeader/TableHeaderItem/TableHeaderItem.props';
import { tooltips } from 'types/Tooltips';

import { AssetsTableRow } from './useAssetsTable';

export enum ColumnKeys {
  MarketCap = 'marketCap',
  Price = 'price',
  Price24hPercent = 'price24hPercent',
  Price7dPercent = 'price7dPercent',
  Volume24h = 'volume24h',
  Volume24hPercent = 'volume24hPercent',
  Supply = 'supply',
}

export const SORTING_COLUMN_KEYS: Record<ColumnKeys, keyof AssetsTableRow> = {
  [ColumnKeys.MarketCap]: 'marketCap',
  [ColumnKeys.Price]: 'price',
  [ColumnKeys.Price24hPercent]: 'price24hDiffPercent',
  [ColumnKeys.Price7dPercent]: 'price7dDiffPercent',
  [ColumnKeys.Volume24h]: 'volume24h',
  [ColumnKeys.Volume24hPercent]: 'volume24hDiffPercent',
  [ColumnKeys.Supply]: 'onChainSupply',
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
    explanationText: tooltips['marketCap'](),
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
    title: 'On-Chain Supply',
    explanationText: tooltips['supply'](),
    columnKey: ColumnKeys.Supply,
  },
  {
    title: 'Last 7 Days',
  },
];
