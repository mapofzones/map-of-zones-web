import { useQuery } from '@apollo/client';

import { AseetsTotalInfoDocument } from 'graphql/v2/AssetsPage/__generated__/AssetsTotalInfo.query.generated';
import { ChartItemByString } from 'utils/helper';

export interface AssetsTotalData {
  assetsCount?: number | null;
  marketCap: number;
  volume24h: number;
  topMarketDominance?: number;
  topMarketLogo?: string | null;
  topMarketName: string;
  topMoverLogo?: string | null;
  topMoverName: string;
  topMoverRating: number;
  topMoverValue: number;
  total24hTradingVolumeChart: ChartItemByString[];
}

export function useAssetsTotalInfo(): {
  data: AssetsTotalData | undefined;
} {
  const { data } = useQuery(AseetsTotalInfoDocument, {});

  return {
    data: data && {
      assetsCount: data.aggregatedData.aggregate?.count,
      marketCap: data.aggregatedData.aggregate?.sum?.marketCap,
      volume24h: data.aggregatedData.aggregate?.sum?.volume24h,
      topMarketDominance: calculateMarketDominance(
        data.marketCapDominance[0].marketCap,
        data.aggregatedData.aggregate?.sum?.marketCap
      ),
      topMarketLogo: data.marketCapDominance[0].blockchain.logoUrl,
      topMarketName: data.marketCapDominance[0].blockchain.name,
      topMoverLogo: data.topMover[0].blockchain.logoUrl,
      topMoverName: data.topMover[0].blockchain.name,
      topMoverRating: data.topMover[0].price24hDiffPercent,
      topMoverValue: data.topMover[0].price,
      total24hTradingVolumeChart: data.total24hTradingVolumeChart,
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
