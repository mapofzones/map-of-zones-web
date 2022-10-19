import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { GraphData } from 'react-force-graph-2d';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import {
  ZonesMapDocument,
  ZonesMapQueryResult,
} from 'graphql/v2/HomePage/__generated__/ZonesMap.query.generated';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { SortRow } from 'hooks/useSortedTableData';
import { ColumnKeys } from 'pages/HomePage/Types';

import { GraphDataApi, ZoneLinkApi, ZoneStatApi } from '../Types';

const sortingKeyByColumnKey: Record<ColumnKeys, keyof ZoneStatApi> = {
  [ColumnKeys.IbcVolume]: 'ibcVolumeRating',
  [ColumnKeys.IbcTransfers]: 'ibcTransfersRating',
  [ColumnKeys.TotalTxs]: 'totalTxsRating',
  [ColumnKeys.Dau]: 'dauRating',
};

export function useGraphData(): {
  data: GraphDataApi;
  loading: boolean;
} {
  const [selectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey] = useDefaultSearchParam<ColumnKeys>('columnKey');

  const [graphData, setGraphData] = useState<GraphDataApi>({ nodes: [], links: [] });
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: true,
    },
  };

  const { data, loading } = useQuery(ZonesMapDocument, options);

  useEffect(() => {
    const newData = transformMapData(data, sortingKeyByColumnKey[selectedColumnKey]);
    setGraphData(newData);
  }, [data, selectedColumnKey]);

  return { data: graphData, loading };
}

function transformMapData(
  data: ZonesMapQueryResult | undefined,
  columnKey: keyof ZoneStatApi
): GraphDataApi {
  if (!data) {
    return { nodes: [], links: [] };
  }

  let zonesStats: ZoneStatApi[] = data.zonesStats.map((zoneStat) => ({
    ...zoneStat,
    ...zoneStat.switchedStats[0],
  }));
  const zonesGraphsData: ZoneLinkApi[] = JSON.parse(JSON.stringify(data.zonesGraphs));

  zonesStats = zonesStats.sort((a, b) => SortRow(a, b, columnKey, 'asc'));

  const nodesKeySet = new Set(zonesStats.map((node) => node.zone));

  const zonesGraphs = zonesGraphsData.filter((link) => filterLinksWithoutNodes(link, nodesKeySet));

  return {
    nodes: zonesStats,
    links: zonesGraphs,
  } as GraphDataApi;
}

function filterLinksWithoutNodes(link: ZoneLinkApi, nodesSet: Set<string>) {
  const hasSource = nodesSet.has(link.source);
  const hasTarget = nodesSet.has(link.target);

  if (!hasSource || !hasTarget) {
    return false;

    const ids =
      !hasSource && !hasTarget
        ? `${link.source}, ${link.target}`
        : !hasSource
        ? link.source
        : link.target;

    const msg = `There is no nodes (${ids}) for link ${link.source}->${link.target}`;
    console.error(msg);

    return false;
  }
  return true;
}
