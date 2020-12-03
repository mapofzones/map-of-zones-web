import { useMemo } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Graph } from '@dagrejs/graphlib';

import { getZoneColor } from 'common/helper';

const ZONES_STAT = gql`
  query ZonesStat($period: Int!, $step: Int!) {
    get_nodes_stats_with_graph_on_period(
      args: { period_in_hours: $period, step_in_hours: $step }
    ) {
      zones
      graph
    }
  }
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

const transform = data => {
  if (!data) {
    return data;
  }

  const { zones, graph } = data.get_nodes_stats_with_graph_on_period[0];

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
    }) => {
      return {
        id: zone,
        name: zone,
        txsActivity: chart,
        totalTxs: total_txs,
        totalIbcTxs: Math.round(Math.random() * 10000),
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
  const { data, ...rest } = useQuery(ZONES_STAT, options);
  const transformedData = useMemo(() => transform(data), [data]);

  return { ...rest, data: transformedData };
};

export const useZonesStatFiltered = (zonesStat, filter) => {
  return useMemo(() => {
    if (filter?.sortOrder && filter?.columnId && filter?.filterAmount) {
      const nodes = zonesStat.nodes
        .sort(
          (a, b) =>
            (filter.sortOrder === 'desc' ? b : a)[filter.columnId] -
            (filter.sortOrder === 'desc' ? a : b)[filter.columnId],
        )
        .slice(0, filter.filterAmount);

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
