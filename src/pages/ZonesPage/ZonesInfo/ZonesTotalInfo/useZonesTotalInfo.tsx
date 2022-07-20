import { useQuery } from '@apollo/client';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZonesTotalInfoDocument } from 'graphql/ZonesPage/ZonesInfo/__generated__/ZonesTotalInfo.generated';
import { transformChartData } from 'utils/helper';

export function useZonesTotalInfo(selectedPeriod: PeriodKeys, isMainnet = true) {
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: isMainnet,
    },
  };

  const { data } = useQuery(ZonesTotalInfoDocument, options);

  return {
    data: data?.headers[0] && {
      ...data.headers[0],
      ibcTransfersTopPair: data.headers[0].ibcTransfersTopPair[0],
      ibcVolumeChart: transformChartData(data.headers[0].ibcVolumeChart, 'ibcVolumeChart'),
      ibcVolumeTopPair: data.headers[0].ibcVolumeTopPair[0],
    },
  };
}
