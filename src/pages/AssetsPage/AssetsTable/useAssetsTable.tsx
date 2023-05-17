// TODO: add query
// import { useQuery } from '@apollo/client';

// import { ZonesTableDocument } from 'graphql/ZonesPage/ZonesInfo/__generated__/ZonesTable.generated';

import { useQuery } from '@apollo/client';

import { AseetsTableDocument } from 'graphql/v2/AssetsPage/__generated__/AssetsTable.query.generated';
import { ChartItemByString } from 'types/chart';

export interface AssetsTableRow {
  blockchain: { name: string };
  symbol?: string | null;
  price?: number | null;
  logoUrl?: string | null;
  price24hDiffPercent?: number | null;
  price7dDiffPercent?: number | null;
  marketCap?: number | null;
  volume24h?: number | null;
  volume24hDiffPercent?: number | null;
  onChainSupply?: number | null;
  priceChart: ChartItemByString[];
}

export function useAssetsTable(): { data: AssetsTableRow[] | undefined; loading: boolean } {
  const { data, loading } = useQuery(AseetsTableDocument, {});

  return {
    data: data?.assets,
    loading,
  };
}
