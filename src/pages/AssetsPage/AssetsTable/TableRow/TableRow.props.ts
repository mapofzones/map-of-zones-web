import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ChartItemByString } from 'utils/helper';

import { ColumnKeys } from '../Types';

export interface AssetData {
  chart: ChartItemByString[];
  code: string;
  logoUrl?: string;
  marketCap?: number | null;
  marketCapDiffRating?: number | null;
  name: string;
  price?: number | null;
  priceDiffRating?: number | null;
  price24hPercent?: number | null;
  price24hPercentDiffRating?: number | null;
  price7dPercent?: number | null;
  price7dPercentDiffRating?: number | null;
  supply?: number | null;
  supplyDiffRating?: number | null;
  volume24h?: number | null;
  volume24hDiffRating?: number | null;
  volume24hPercent?: number | null;
  volume24hPercentDiffRating?: number | null;
}

export interface TableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  asset: AssetData;
  className?: string;
  index: number;
  isTableHorizontalScrollable?: boolean;
  selectedColumnKey: ColumnKeys;
}
