import { useMemo } from 'react';
import gql from 'graphql-tag';
import { Graph } from '@dagrejs/graphlib';

import { getIsUptrend, getZoneColor } from 'common/helper';
import { useRealtimeQuery } from 'common/hooks';

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
    channels_cnt_open
    channels_cnt_active_period
    channels_percent_active_period
    total_ibc_txs_weight
    total_txs_weight
    ibc_tx_in_weight
    ibc_tx_out_weight
    total_txs_diff
    total_ibc_txs_diff
    ibc_tx_out_diff
    ibc_tx_in_diff
    total_txs_rating
    total_txs_rating_diff
    total_ibc_txs_rating
    total_ibc_txs_rating_diff
    ibc_tx_out_rating
    ibc_tx_out_rating_diff
    ibc_tx_in_rating
    ibc_tx_in_rating_diff
    total_active_addresses
    total_active_addresses_diff
    total_active_addresses_weight
    ibc_tx_failed
    ibc_tx_out_failed
    ibc_tx_in_failed
    ibc_tx_failed_diff
    total_active_addresses_rating
    total_active_addresses_rating_diff
    is_zone_up_to_date
    is_zone_mainnet
    zone_readable_name
    zone_label_url
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
    channels_cnt_open
    channels_cnt_active
    channels_percent_active
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
      channels_cnt_open,
      channels_cnt_active_period,
      channels_percent_active_period,
      total_ibc_txs_weight,
      total_txs_weight,
      ibc_tx_in_weight,
      ibc_tx_out_weight,
      total_txs_diff,
      total_ibc_txs_diff,
      ibc_tx_out_diff,
      ibc_tx_in_diff,
      total_txs_rating,
      total_txs_rating_diff,
      total_ibc_txs_rating,
      total_ibc_txs_rating_diff,
      ibc_tx_out_rating,
      ibc_tx_out_rating_diff,
      ibc_tx_in_rating,
      ibc_tx_in_rating_diff,
      total_active_addresses,
      total_active_addresses_diff,
      total_active_addresses_weight,
      ibc_tx_failed,
      ibc_tx_out_failed,
      ibc_tx_in_failed,
      ibc_tx_failed_diff,
      total_active_addresses_rating,
      total_active_addresses_rating_diff,
      is_zone_up_to_date,
      is_zone_mainnet,
      zone_readable_name,
      zone_label_url,
    }) => {
      return {
        id: zone,
        name: zone_readable_name,
        txsActivity: chart,
        totalTxs: total_txs,
        totalIbcTxs: total_ibc_txs,
        ibcPercentage: ibc_percent / 100,
        ibcSent: ibc_tx_out,
        ibcSentPercentage: ibc_tx_out / total_ibc_txs || 0,
        ibcReceived: ibc_tx_in,
        ibcReceivedPercentage: ibc_tx_in / total_ibc_txs || 0,
        channels: channels_num,
        openChannels: channels_cnt_open,
        activeChannels: channels_cnt_active_period,
        activeChannelsPercent: channels_percent_active_period,
        totalTxsDiff: total_txs_diff,
        totalIbcTxsDiff: total_ibc_txs_diff,
        ibcSentDiff: ibc_tx_out_diff,
        ibcReceivedDiff: ibc_tx_in_diff,
        totalTxsRating: total_txs_rating,
        totalTxsRatingDiff: total_txs_rating_diff,
        totalIbcTxsRating: total_ibc_txs_rating,
        totalIbcTxsRatingDiff: total_ibc_txs_rating_diff,
        ibcSentRating: ibc_tx_out_rating,
        ibcSentRatingDiff: ibc_tx_out_rating_diff,
        ibcReceivedRating: ibc_tx_in_rating,
        ibcReceivedRatingDiff: ibc_tx_in_rating_diff,
        totalActiveAddresses: total_active_addresses,
        totalActiveAddressesDiff: total_active_addresses_diff,
        totalActiveAddressesWeight: total_active_addresses_weight * 10 + 1,
        ibcTxFailed: ibc_tx_failed,
        ibcTxOutFailed: ibc_tx_out_failed,
        ibcTxInFailed: ibc_tx_in_failed,
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
        isZoneUpToDate: is_zone_up_to_date,
        isZoneMainnet: is_zone_mainnet,
        zoneLabelUrl: zone_label_url,
      };
    },
  );

  const linksFormatted = graph.map(
    ({
      source,
      target,
      channels_cnt_open,
      channels_cnt_active,
      channels_percent_active,
    }) => ({
      source,
      target,
      openedChannels: channels_cnt_open,
      activeChannels: channels_cnt_active,
      activeChannelsPercent: channels_percent_active,
    }),
  );

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

export const useZonesStatFiltered = (zonesStat, filter, focusedZone) => {
  return useMemo(() => {
    if (
      (filter?.columnId &&
        ((filter?.sortOrder && filter?.filterAmount) || filter?.trendLine)) ||
      focusedZone
    ) {
      let nodes = [...zonesStat.nodes];
      let links = [...zonesStat.links];

      if (filter?.trendLine) {
        nodes = nodes.filter(node => {
          const isUptrend = getIsUptrend(node.txsActivity);

          return filter.trendLine === 'asc' ? isUptrend : !isUptrend;
        });
      }

      if (filter?.sortOrder && filter.filterAmount) {
        nodes = nodes
          .reverse()
          .sort(
            (a, b) =>
              (filter.sortOrder === 'desc' ? b : a)[filter.columnId] -
              (filter.sortOrder === 'desc' ? a : b)[filter.columnId],
          )
          .slice(0, filter.filterAmount);
      }

      links = links.map(({ source, target, ...restLinkData }) => ({
        ...restLinkData,
        source: source?.id || source,
        target: target?.id || target,
      }));

      links = links.filter(
        ({ source, target }) =>
          !!nodes.find(({ id }) => id === source) &&
          !!nodes.find(({ id }) => id === target),
      );

      if (focusedZone) {
        links = links.filter(
          ({ source, target }) =>
            source === focusedZone.id ||
            target === focusedZone.id ||
            source.id === focusedZone.id ||
            target.id === focusedZone.id,
        );
      }

      return {
        nodes,
        links,
        graph: createGraph(nodes, links),
      };
    }

    return zonesStat;
  }, [filter, focusedZone, zonesStat]);
};
