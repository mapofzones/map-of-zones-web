import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { ZonesCompareReturnedAddressesDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareReturnedAddresses.query.generated';
import { calculateReturnedRate } from 'pages/ZonesPage/ZonePage/ZoneOverview/ZoneOverviewReturnedAddresses/useZoneOverviewReturnedAddresses';
import { ANALYSIS_PERIODS_IN_HOURS_BY_KEY, AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartItemWithTime } from 'types/chart';
import { ZoneBase } from 'types/models/ZoneDetails';
import { mapCharts } from 'utils/mapCharts';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

import { sortDetailsByZoneKeys } from '../utils/sortDetailsByZoneKeys';

interface ZoneTokenResult extends ZoneBase {
  symbol: string | undefined;
  price?: number;
  marketCap?: number;
  tradingVolume?: number;
}

export type TokenProperties = 'price' | 'marketCap' | 'tradingVolume';

interface ZonesTokenComparisonResult {
  data: ZoneTokenResult[] | undefined;
  chart: ChartItemWithTime[];
  loading: boolean;
}

export function useZonesReturnedAddressesComparison(
  zones: string[],
  period: AnalysisCardPeriod
): ZonesTokenComparisonResult {
  const [handledData, setHandledData] = useState<ZonesTokenComparisonResult>(
    {} as ZonesTokenComparisonResult
  );

  const periodInHours = ANALYSIS_PERIODS_IN_HOURS_BY_KEY[period];
  const options = {
    variables: { zones: [...zones], period: periodInHours },
    skip: !zones,
  };

  const { data, loading } = useQuery(ZonesCompareReturnedAddressesDocument, options);

  useEffect(() => {
    const stats = nullsToUndefined(data?.stats) ?? [];

    const mappedData = stats.map((cardData) => ({
      zone: cardData.zone,
      returnedRate: calculateReturnedRate(
        cardData?.repeatableAddresses,
        cardData?.previousActiveAddresees
      ),
      returnedAddresses: cardData?.repeatableAddresses,
      prevTotalAddresses: cardData?.previousActiveAddresees,
      ibcReturnedRate: calculateReturnedRate(
        cardData?.ibcRepeatableAddresses,
        cardData?.ibcPreviousActiveAddresees
      ),
      ibcReturnedAddresses: cardData?.ibcRepeatableAddresses,
      ibcPrevTotalAddresses: cardData?.ibcPreviousActiveAddresees,
    }));

    const mappedChart = mapCharts(
      stats.map((data) => ({ zone: data.zone, chart: data.token?.chart })),
      ['chart']
    );

    setHandledData({
      data: sortDetailsByZoneKeys(zones, mappedData),
      chart: mappedChart['chart'],
      loading,
    });
  }, [data?.compareTokens, loading, zones]);

  return handledData;
}

const options = {
  variables: {
    zones: [...zones],
    period: periodInHours,
    isMainnet: true,
    periodInDays: periodInDays,
  },
  skip: !zones,
};

const { data, loading } = useQuery(ZoneCompareIbcVolumeDocument, options);

useEffect(() => {
  const compareItems = nullsToUndefined(data?.stats) ?? [];

  const mappedData = compareItems.map((item) => ({
    zone: item.zone,
    ibcVolume: item.ibcVolume?.aggregate?.sum?.volume,
    ibcVolumeIn: item.ibcVolumeIn?.aggregate?.sum?.volumeIn,
    ibcVolumeOut: item.ibcVolumeOut?.aggregate?.sum?.volumeOut,
  }));

  const charts = mapCharts(compareItems, [
    'ibcVolumeChart',
    'ibcVolumeInChart',
    'ibcVolumeOutChart',
  ]);

  setHandledData({
    data: sortDetailsByZoneKeys(zones, mappedData),
    charts: {
      ibcVolume: charts.ibcVolumeChart,
      ibcVolumeIn: charts.ibcVolumeInChart,
      ibcVolumeOut: charts.ibcVolumeOutChart,
    },
    loading,
  });
}, [data?.stats, loading, zones]);

return handledData;
