// import { useQuery } from '@apollo/client';

// import { ZonesTableDocument } from 'graphql/ZonesPage/ZonesInfo/__generated__/ZonesTable.generated';

import { AssetData } from './TableRow/TableRow.props';

export function useAssetsTable(sortingColumnKey: string, isMainnet = true): { data: AssetData[] } {
  const options = {
    variables: {
      isMainnet: isMainnet,
      orderBy: {
        [sortingColumnKey]: 'asc',
      },
    },
  };

  // const { data } = useQuery(ZonesTableDocument, options);

  return {
    data: [
      {
        chart: [
          { chart: 864008 },
          { chart: 525530 },
          { chart: 542427 },
          { chart: 834886 },
          { chart: 580224 },
          { chart: 453794 },
          { chart: 1262586 },
          { chart: 1049334 },
          { chart: 1275890 },
          { chart: 578509 },
          { chart: 849844 },
          { chart: 1038182 },
        ],
        code: 'OSMO',
        logoUrl: 'https://storage.mapofzones.com/frontend/labels/Cosmos40.svg',
        marketCap: 760644271905,
        marketCapDiffRating: 4,
        name: 'Osmosis',
        price: 798,
        price24hPercent: -5.2,
        price7dPercent: 3.2,
        supply: 645000000,
        volume24h: 78140124,
        volume24hPercent: -4.2,
      },
      {
        chart: [
          { chart: 864008 },
          { chart: 525530 },
          { chart: 542427 },
          { chart: 834886 },
          { chart: 580224 },
          { chart: 453794 },
          { chart: 1262586 },
          { chart: 1049334 },
          { chart: 1275890 },
          { chart: 578509 },
          { chart: 849844 },
          { chart: 1038182 },
        ],
        code: 'CSM',
        logoUrl: 'https://storage.mapofzones.com/frontend/labels/Cosmos40.svg',
        marketCap: 83011707888,
        marketCapDiffRating: 0,
        name: 'Cosmos',
        price: 523,
        price24hPercent: 1.8,
        price7dPercent: 7.7,
        supply: 853531123,
        volume24h: 8674257,
        volume24hPercent: 7.25,
      },
      {
        chart: [
          { chart: 864008 },
          { chart: 525530 },
          { chart: 542427 },
          { chart: 834886 },
          { chart: 580224 },
          { chart: 453794 },
          { chart: 1262586 },
          { chart: 1049334 },
          { chart: 1275890 },
          { chart: 578509 },
          { chart: 849844 },
          { chart: 1038182 },
        ],
        code: 'JUNO',
        logoUrl: 'https://storage.mapofzones.com/frontend/labels/Cosmos40.svg',
        marketCap: 3634707456,
        marketCapDiffRating: -13,
        name: 'Juno',
        price: 193,
        price24hPercent: 9.8,
        price7dPercent: 0,
        supply: 32630964,
        volume24h: 8674257,
        volume24hPercent: 7.25,
      },
    ],
  };
}
