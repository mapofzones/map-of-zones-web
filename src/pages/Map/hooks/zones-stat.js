import { useMemo } from 'react';
import gql from 'graphql-tag';
import { Graph } from '@dagrejs/graphlib';

import { getZoneColor } from 'common/helper';
import { useRealtimeQuery } from 'common/hooks';
import leaderboardColumnsConfig from 'pages/Map/components/Leaderboard/config';

const ZONES_STAT_FRAGMENT = gql`
  fragment stat on zones_stats {
    zone
    chart
    total_txs
    total_ibc_txs
    ibc_percent
    ibc_tx_in
    ibc_tx_out
    channels_num
    total_ibc_txs_weight
    total_txs_weight
    ibc_tx_in_weight
    ibc_tx_out_weight
    total_txs_diff
    total_ibc_txs_diff
    ibc_tx_out_diff
    ibc_tx_in_diff
    total_txs_rating_diff
    total_ibc_txs_rating_diff
    ibc_tx_out_rating_diff
    ibc_tx_in_rating_diff
    total_active_addresses
    total_active_addresses_diff
    ibc_tx_failed
    ibc_tx_failed_diff
    total_active_addresses_rating
    total_active_addresses_rating_diff
  }
`;

const ZONES_STAT_QUERY = gql`
  query ZonesStat($period: Int!) {
    zones_stats(
      where: { timeframe: { _eq: $period } }
      order_by: { ibc_tx_in: asc, zone: asc }
    ) {
      ...stat
    }
  }
  ${ZONES_STAT_FRAGMENT}
`;

const ZONES_STAT_SUBSCRIPTION = gql`
  subscription ZonesStat($period: Int!) {
    zones_stats(
      where: { timeframe: { _eq: $period } }
      order_by: { ibc_tx_in: asc, zone: asc }
    ) {
      ...stat
    }
  }
  ${ZONES_STAT_FRAGMENT}
`;

const ZONES_GRAPH_FRAGMENT = gql`
  fragment graph on zones_graphs {
    source
    target
  }
`;

const ZONES_GRAPH_QUERY = gql`
  query ZonesGraph($period: Int!) {
    zones_graphs(where: { timeframe: { _eq: $period } }) {
      ...graph
    }
  }
  ${ZONES_GRAPH_FRAGMENT}
`;

const ZONES_GRAPH_SUBSCRIPTION = gql`
  subscription ZonesGraph($period: Int!) {
    zones_graphs(where: { timeframe: { _eq: $period } }) {
      ...graph
    }
  }
  ${ZONES_GRAPH_FRAGMENT}
`;

const DEFAULT_COLOR = '#72727A';

const createGraph = (nodes, links) => {
  const g = new Graph();

  nodes.forEach(node => g.setNode(node.id, node));
  links.forEach(({ source, target }) => g.setEdge(source, target));

  return g;
};

const getScaleParams = (zones, key) => {
  const weights = zones.map(({ [key]: weight }) => weight).filter(Boolean);

  if (!weights.length) {
    return [1, 1];
  }

  const minWeight = Math.min(...weights);
  const min = weights.length === zones.length ? minWeight : minWeight / 2;
  const scale = min < 1 ? 1 / min : min;

  return [min, scale];
};

const getNodeWeight = (val, min, scale) => Math.log2((val || min) * scale) + 1;

const transform = (zones, graph) => {
  if (!zones || !graph) {
    return null;
  }

  const [minIbcTxsWeight, ibcTxsScale] = getScaleParams(
    zones,
    'total_ibc_txs_weight',
  );
  const [minTxsWeight, txsScale] = getScaleParams(zones, 'total_txs_weight');
  const [minIbcReceivedWeight, ibcReceivedScale] = getScaleParams(
    zones,
    'ibc_tx_in_weight',
  );
  const [minIbcSentWeight, ibcSentScale] = getScaleParams(
    zones,
    'ibc_tx_out_weight',
  );

  const zonesFormatted = zones.map(
    ({
      zone,
      chart,
      total_txs,
      total_ibc_txs,
      ibc_percent,
      ibc_tx_in,
      ibc_tx_out,
      channels_num,
      total_ibc_txs_weight,
      total_txs_weight,
      ibc_tx_in_weight,
      ibc_tx_out_weight,
      total_txs_diff,
      total_ibc_txs_diff,
      ibc_tx_out_diff,
      ibc_tx_in_diff,
      total_txs_rating_diff,
      total_ibc_txs_rating_diff,
      ibc_tx_out_rating_diff,
      ibc_tx_in_rating_diff,
      total_active_addresses,
      total_active_addresses_diff,
      ibc_tx_failed,
      ibc_tx_failed_diff,
      total_active_addresses_rating,
      total_active_addresses_rating_diff,
    }) => {
      return {
        id: zone,
        name: zone,
        txsActivity: chart,
        totalTxs: total_txs,
        totalIbcTxs: total_ibc_txs,
        ibcPercentage: ibc_percent / 100,
        ibcSent: ibc_tx_out,
        ibcSentPercentage: ibc_tx_out / total_ibc_txs || 0,
        ibcReceived: ibc_tx_in,
        ibcReceivedPercentage: ibc_tx_in / total_ibc_txs || 0,
        channels: channels_num,
        totalTxsDiff: total_txs_diff,
        totalIbcTxsDiff: total_ibc_txs_diff,
        ibcSentDiff: ibc_tx_out_diff,
        ibcReceivedDiff: ibc_tx_in_diff,
        totalTxsRatingDiff: total_txs_rating_diff,
        totalIbcTxsRatingDiff: total_ibc_txs_rating_diff,
        ibcSentRatingDiff: ibc_tx_out_rating_diff,
        ibcReceivedRatingDiff: ibc_tx_in_rating_diff,
        totalActiveAddresses: total_active_addresses,
        totalActiveAddressesDiff: total_active_addresses_diff,
        ibcTxFailed: ibc_tx_failed,
        ibcTxFailedDiff: ibc_tx_failed_diff,
        totalActiveAddressesRating: total_active_addresses_rating,
        totalActiveAddressesRatingDiff: total_active_addresses_rating_diff,
        color: total_ibc_txs
          ? getZoneColor(ibc_tx_out / total_ibc_txs)
          : DEFAULT_COLOR,
        ibcTxsWeight: getNodeWeight(
          total_ibc_txs_weight,
          minIbcTxsWeight,
          ibcTxsScale,
        ),
        txsWeight: getNodeWeight(total_txs_weight, minTxsWeight, txsScale),
        ibcReceivedWeight: getNodeWeight(
          ibc_tx_in_weight,
          minIbcReceivedWeight,
          ibcReceivedScale,
        ),
        ibcSentWeight: getNodeWeight(
          ibc_tx_out_weight,
          minIbcSentWeight,
          ibcSentScale,
        ),
      };
    },
  );

  const linksFormatted = graph.map(({ source, target }) => ({
    source,
    target,
  }));

  return {
    nodes: zonesFormatted,
    links: linksFormatted,
    graph: createGraph(zonesFormatted, linksFormatted),
  };
};

export const useZonesStat = options => {
  const zones = useRealtimeQuery(
    ZONES_STAT_QUERY,
    ZONES_STAT_SUBSCRIPTION,
    options,
  );
  const graph = useRealtimeQuery(
    ZONES_GRAPH_QUERY,
    ZONES_GRAPH_SUBSCRIPTION,
    options,
  );

  return useMemo(() => transform(zones?.zones_stats, graph?.zones_graphs), [
    zones,
    graph,
  ]);
};

export const useZonesStatFiltered = (zonesStat, filter) => {
  return useMemo(() => {
    if (
      filter?.columnId &&
      ((filter?.sortOrder && filter?.filterAmount) || filter?.trendLine)
    ) {
      let nodes = zonesStat.nodes;

      if (filter?.sortOrder && filter.filterAmount) {
        nodes = [...nodes]
          .sort(
            (a, b) =>
              (filter.sortOrder === 'desc' ? b : a)[filter.columnId] -
              (filter.sortOrder === 'desc' ? a : b)[filter.columnId],
          )
          .slice(0, filter.filterAmount);
      }

      if (filter?.trendLine) {
        const column = leaderboardColumnsConfig.find(
          ({ id }) => id === filter.columnId,
        );

        if (column?.diffAccessor) {
          nodes = nodes.filter(node => {
            const value = node[column.diffAccessor];

            console.log({ node });

            return filter.trendLine === 'asc' ? value > 0 : value < 0;
          });
        }
      }

      const links = zonesStat.links
        .filter(
          ({ source, target }) =>
            nodes.includes(source) && nodes.includes(target),
        )
        .map(({ source, target }) => ({
          source,
          target,
        }));

      return {
        nodes,
        links,
        graph: createGraph(nodes, links),
      };
    }

    return zonesStat;
  }, [zonesStat, filter]);
};
