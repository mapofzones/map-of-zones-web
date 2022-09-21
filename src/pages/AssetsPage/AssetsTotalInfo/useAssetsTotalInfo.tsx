import { useQuery } from '@apollo/client';

import { AseetsTotalInfoDocument } from 'graphql/v2/AssetsPage/__generated__/AssetsTotalInfo.query.generated';
import { ChartItemByString } from 'utils/helper';

export interface AssetsTotalData {
  assetsCount?: number | null;
  marketCap: number;
  volume24h: number;
  topMarketDominance?: number;
  topMarketTokenLogo?: string | null;
  topMarketTokenSymbol?: string | null;
  topMarketName: string;
  topMoverTokenLogo?: string | null;
  topMoverTokenSymbol?: string | null;
  topMoverName: string;
  topMoverRating: number;
  topMoverValue: number;
  total24hTradingVolumeChart: ChartItemByString[];
}

export function useAssetsTotalInfo(): {
  data: AssetsTotalData | undefined;
} {
  const { data } = useQuery(AseetsTotalInfoDocument, {});

  const aggregatedData = data?.aggregatedData?.aggregate;

  return {
    data: data && {
      assetsCount: aggregatedData?.count,
      marketCap: aggregatedData?.sum?.marketCap,
      volume24h: aggregatedData?.sum?.volume24h,
      topMarketDominance: calculateMarketDominance(
        data.marketCapDominance[0]?.marketCap,
        aggregatedData?.sum?.marketCap
      ),
      topMarketTokenLogo: data.marketCapDominance[0]?.blockchain?.token?.logoUrl,
      topMarketTokenSymbol: data.marketCapDominance[0]?.blockchain?.token?.symbol,
      topMarketName: data.marketCapDominance[0]?.blockchain?.name,
      topMoverTokenLogo: data.topMover[0]?.blockchain?.token?.logoUrl,
      topMoverTokenSymbol: data.topMover[0]?.blockchain?.token?.symbol,
      topMoverName: data.topMover[0]?.blockchain?.name,
      topMoverRating: data.topMover[0]?.price24hDiffPercent,
      topMoverValue: data.topMover[0]?.price,
      total24hTradingVolumeChart: data?.total24hTradingVolumeChart,
    },
  };
}

function calculateMarketDominance(
  blockchainMarketcap: number | undefined,
  totalMarketCap: number | undefined
) {
  if (
    blockchainMarketcap === null ||
    blockchainMarketcap === undefined ||
    totalMarketCap === null ||
    totalMarketCap === undefined
  ) {
    return undefined;
  }

  return (blockchainMarketcap / totalMarketCap) * 100;
}
