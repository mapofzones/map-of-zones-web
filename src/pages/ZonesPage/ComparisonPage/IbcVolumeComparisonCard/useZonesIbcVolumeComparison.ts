import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { ZoneCompareIbcVolumeDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareIbcVolume.query.generated';
import { ANALYSIS_PERIODS_IN_HOURS_BY_KEY, AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartItemWithTime } from 'types/chart';
import { mapCharts } from 'utils/mapCharts';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

import { sortDetailsByZoneKeys } from '../utils/sortDetailsByZoneKeys';

interface ZoneVolumeResult {
  zone: string;
  ibcVolume?: number;
  ibcVolumeIn?: number;
  ibcVolumeOut?: number;
}

interface ZonesIbcVolumeComparisonResult {
  data: ZoneVolumeResult[] | undefined;
  charts: Record<string, ChartItemWithTime[]>;
  loading: boolean;
}

export function useZonesIbcVolumeComparison(
  zones: string[],
  period: AnalysisCardPeriod
): ZonesIbcVolumeComparisonResult {
  const [handledData, setHandledData] = useState<ZonesIbcVolumeComparisonResult>(
    {} as ZonesIbcVolumeComparisonResult
  );

  const periodInHours = ANALYSIS_PERIODS_IN_HOURS_BY_KEY[period];
  const periodInDays = periodInHours / 24;

  const options = {
    variables: {
      zones: [...zones],
      period: periodInHours,
      isMainnet: true,
      periodInDays: periodInDays,
    },
    skip: !zones?.length,
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
}
