// TODO: add query
// import { useQuery } from '@apollo/client';

// import { ZonesTotalInfoDocument } from 'graphql/ZonesPage/ZonesInfo/__generated__/ZonesTotalInfo.generated';
// import { transformChartData } from 'utils/helper';

export function useAssetsTotalInfo() {
  // export function useAssetsTotalInfo(isMainnet = true) {
  // const options = {
  //   variables: {
  //     isMainnet: isMainnet,
  //   },
  // };

  // const { data } = useQuery(ZonesTotalInfoDocument, options);

  // return {
  //   data: data?.headers[0] && {
  //     ibcVolumeChart: transformChartData(data.headers[0].ibcVolumeChart, 'ibcVolumeChart'),
  //   },
  // };
  return {
    data: {
      assetsCount: 35,
      ibcVolumeChart: [],
      marketCap: 198308551250,
      topMarketDominance: 35,
      topMarketLogo: 'https://storage.mapofzones.com/frontend/labels/Cosmos40.svg',
      topMarketName: 'Cosmos',
      topMoverLogo: 'https://storage.mapofzones.com/frontend/labels/Cosmos40.svg',
      topMoverName: 'Desmos',
      topMoverRating: 1.54,
      topMoverValue: 760644271905,
      volume24h: 995345645124,
    },
  };
}
