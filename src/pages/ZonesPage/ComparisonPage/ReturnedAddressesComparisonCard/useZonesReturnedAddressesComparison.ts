import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY, PeriodKeys } from 'components';
import {
  ZonesCompareReturnedAddressesDocument,
  ZonesCompareReturnedAddressesQueryResult,
} from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareReturnedAddresses.query.generated';
import { calculateReturnedRate } from 'pages/ZonesPage/ZonePage/ZoneOverview/ZoneOverviewReturnedAddresses/useZoneOverviewReturnedAddresses';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

import { sortDetailsByZoneKeys } from '../utils/sortDetailsByZoneKeys';

interface ZoneReturnedAddressesComparisonItem {
  zone: string;
  returnedRate?: number;
  returnedAddresses?: number;
  prevTotalAddresses?: number;
  ibcReturnedRate?: number;
  ibcReturnedAddresses?: number;
  ibcPrevTotalAddresses?: number;
}

interface ZonesReturnedAddressesComparisonResult {
  data: ZoneReturnedAddressesComparisonItem[] | undefined;
  loading: boolean;
}

export function useZonesReturnedAddressesComparison(
  zones: string[],
  period: PeriodKeys
): ZonesReturnedAddressesComparisonResult {
  const [handledData, setHandledData] = useState<ZonesReturnedAddressesComparisonResult>(
    {} as ZonesReturnedAddressesComparisonResult
  );

  const options = {
    variables: { zones: [...zones], period: PERIODS_IN_HOURS_BY_KEY[period] },
    skip: !zones,
  };

  const { data, loading } = useQuery<ZonesCompareReturnedAddressesQueryResult>(
    ZonesCompareReturnedAddressesDocument,
    options
  );

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

    setHandledData({
      data: sortDetailsByZoneKeys(zones, mappedData),
      loading,
    });
  }, [data?.stats, loading, zones]);

  return handledData;
}
