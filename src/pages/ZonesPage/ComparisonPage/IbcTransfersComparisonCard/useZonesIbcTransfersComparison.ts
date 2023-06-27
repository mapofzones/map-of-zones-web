import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { ZoneCompareIbcTransfersDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareIbcTransfers.query.generated';
import { ANALYSIS_PERIODS_IN_HOURS_BY_KEY, AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartItemWithTime } from 'types/chart';
import { mapCharts } from 'utils/mapCharts';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

import { sortDetailsByZoneKeys } from '../utils/sortDetailsByZoneKeys';

interface ZoneTransferResult {
  zone: string;
  ibcTransfers?: number;
  ibcTransfersIn?: number;
  ibcTransfersOut?: number;
}

interface ZonesIbcVolumeComparisonResult {
  data: ZoneTransferResult[] | undefined;
  charts: Record<string, ChartItemWithTime[]>;
  loading: boolean;
}

export function useZonesIbcTransfersComparison(
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

  const { data, loading } = useQuery(ZoneCompareIbcTransfersDocument, options);

  useEffect(() => {
    const compareItems = nullsToUndefined(data?.stats) ?? [];

    const mappedData = compareItems.map((item) => ({
      zone: item.zone,
      ibcTransfers: item.ibcTransfers?.aggregate?.sum?.value,
      ibcTransfersIn: item.ibcTransfersIn?.aggregate?.sum?.value,
      ibcTransfersOut: item.ibcTransfersOut?.aggregate?.sum?.value,
    }));

    const charts = mapCharts(compareItems, [
      'ibcTransfersChart',
      'ibcTransfersInChart',
      'ibcTransfersOutChart',
    ]);

    setHandledData({
      data: sortDetailsByZoneKeys(zones, mappedData),
      charts: {
        ibcTransfers: charts.ibcTransfersChart,
        ibcTransfersIn: charts.ibcTransfersInChart,
        ibcTransfersOut: charts.ibcTransfersOutChart,
      },
      loading,
    });
  }, [data?.stats, loading, zones]);

  return handledData;
}
