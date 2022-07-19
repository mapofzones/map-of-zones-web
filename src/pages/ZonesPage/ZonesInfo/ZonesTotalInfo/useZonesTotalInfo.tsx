import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { ZonesTotalInfoDocument } from 'graphql/ZonesPage/ZonesInfo/__generated__/ZonesTotalInfo.generated';
import { PeriodKeys, PERIODS } from 'pages/HomePage/Sidebar/ZonesInfo/Types';
import { transformChartData } from 'utils/helper';

export function useZonesTotalInfo(selectedPeriod: PeriodKeys, isMainnet = true) {
  const options = useMemo(
    () => ({
      variables: {
        period: PERIODS[selectedPeriod],
        isMainnet: isMainnet,
      },
    }),
    [selectedPeriod, isMainnet]
  );

  const { data } = useQuery(ZonesTotalInfoDocument, options);

  return useMemo(
    () => ({
      data: data?.headers[0] && {
        ...data.headers[0],
        ibcTransfersTopPair: data.headers[0].ibcTransfersTopPair[0],
        ibcVolumeChart: transformChartData(data.headers[0].ibcVolumeChart, 'ibcVolumeChart'),
        ibcVolumeTopPair: data.headers[0].ibcVolumeTopPair[0],
      },
    }),
    [data]
  );
}
