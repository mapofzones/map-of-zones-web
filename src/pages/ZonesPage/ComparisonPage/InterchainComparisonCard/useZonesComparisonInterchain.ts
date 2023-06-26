import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import {
  ZoneCompareInterchainDocument,
  ZoneCompareInterchainQueryResult,
} from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareInterchain.query.generated';
import { DataResultWithLoading } from 'types/DataResultWithLoading';
import { ZoneBase } from 'types/models/ZoneDetails';
import { PeriodKeys } from 'types/PeriodKeys';

import { sortDetailsByZoneKeys } from '../utils/sortDetailsByZoneKeys';

export type InterchainData =
  ZoneCompareInterchainQueryResult['data'][number]['switchedStats'][number];

interface ZonesComparisonInterchain extends ZoneBase, InterchainData {}

interface ZonesComparisonInterchainResult
  extends DataResultWithLoading<ZonesComparisonInterchain[]> {}

export function useZonesComprisonInterchain(
  period: PeriodKeys,
  zones: string[]
): DataResultWithLoading<ZonesComparisonInterchain[]> {
  const [handledData, setHandledData] = useState<ZonesComparisonInterchainResult>(
    {} as ZonesComparisonInterchainResult
  );

  const options = {
    variables: { zones: [...zones], period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zones,
  };

  const { data, loading } = useQuery(ZoneCompareInterchainDocument, options);

  useEffect(() => {
    const mappedData: ZonesComparisonInterchain[] = (data?.data ?? []).map((item) => ({
      zone: item.zone,
      name: item.name,
      peersCount: item?.switchedStats[0]?.peersCount,
      channelsCount: item?.switchedStats[0]?.channelsCount,
    }));

    const sortedZones = sortDetailsByZoneKeys(zones, mappedData);

    setHandledData({
      data: sortedZones,
      loading,
    });
  }, [data?.data, loading, zones]);

  return handledData;
}
