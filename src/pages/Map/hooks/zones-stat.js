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
    total_ibc_txs_mainnet_weight
    total_txs_weight
    total_txs_mainnet_weight
    ibc_tx_in_weight
    ibc_tx_in_mainnet_weight
    ibc_tx_out_weight
    ibc_tx_out_mainnet_weight
    total_txs_diff
    total_ibc_txs_diff
    ibc_tx_out_diff
    ibc_tx_in_diff
    total_txs_rating
    total_txs_rating_diff
    total_txs_mainnet_rating
    total_txs_mainnet_rating_diff
    total_ibc_txs_rating
    total_ibc_txs_rating_diff
    total_ibc_txs_mainnet_rating
    total_ibc_txs_mainnet_rating_diff
    ibc_tx_out_rating
    ibc_tx_out_rating_diff
    ibc_tx_out_mainnet_rating
    ibc_tx_out_mainnet_rating_diff
    ibc_tx_in_rating
    ibc_tx_in_rating_diff
    ibc_tx_in_mainnet_rating
    ibc_tx_in_mainnet_rating_diff
    total_active_addresses
    total_active_addresses_diff
    total_active_addresses_weight
    total_active_addresses_mainnet_weight
    ibc_tx_failed
    ibc_tx_out_failed
    ibc_tx_in_failed
    ibc_tx_failed_diff
    total_active_addresses_rating
    total_active_addresses_rating_diff
    total_active_addresses_mainnet_rating
    total_active_addresses_mainnet_rating_diff
    is_zone_up_to_date
    is_zone_mainnet
    zone_readable_name
    zone_label_url
    zone_label_url2
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

const ZONES_STAT_QUERY_ONLY_MAINNET = gql`
  query ZonesStat($period: Int!) {
    zones_stats(
      where: { timeframe: { _eq: $period }, is_zone_mainnet: { _eq: true } }
      order_by: { ibc_tx_in: asc, zone: asc }
    ) {
      ...stat
    }
  }
  ${ZONES_STAT_FRAGMENT}
`;

const ZONES_STAT_SUBSCRIPTION_ONLY_MAINNET = gql`
  subscription ZonesStat($period: Int!) {
    zones_stats(
      where: { timeframe: { _eq: $period }, is_zone_mainnet: { _eq: true } }
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

const ZONES_GRAPH_QUERY_ONLY_MAINNET = gql`
  query ZonesGraph($period: Int!) {
    zones_graphs(
      where: { timeframe: { _eq: $period }, is_mainnet: { _eq: true } }
    ) {
      ...graph
    }
  }
  ${ZONES_GRAPH_FRAGMENT}
`;

const ZONES_GRAPH_SUBSCRIPTION_ONLY_MAINNET = gql`
  subscription ZonesGraph($period: Int!) {
    zones_graphs(
      where: { timeframe: { _eq: $period }, is_mainnet: { _eq: true } }
    ) {
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

const transform = (zones, graph, isTestnetVisible) => {
  if (!zones || !graph) {
    return null;
  }

  const [minIbcTxsWeight, ibcTxsScale] = getScaleParams(
    zones,
    isTestnetVisible ? 'total_ibc_txs_weight' : 'total_ibc_txs_mainnet_weight',
  );
  const [minTxsWeight, txsScale] = getScaleParams(
    zones,
    isTestnetVisible ? 'total_txs_weight' : 'total_txs_mainnet_weight',
  );
  const [minIbcReceivedWeight, ibcReceivedScale] = getScaleParams(
    zones,
    isTestnetVisible ? 'ibc_tx_in_weight' : 'ibc_tx_in_mainnet_weight',
  );
  const [minIbcSentWeight, ibcSentScale] = getScaleParams(
    zones,
    isTestnetVisible ? 'ibc_tx_out_weight' : 'ibc_tx_out_mainnet_weight',
  );

  let zonesFormatted = zones.map(
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
      total_ibc_txs_mainnet_weight,
      total_txs_weight,
      total_txs_mainnet_weight,
      ibc_tx_in_weight,
      ibc_tx_in_mainnet_weight,
      ibc_tx_out_weight,
      ibc_tx_out_mainnet_weight,
      total_txs_diff,
      total_ibc_txs_diff,
      ibc_tx_out_diff,
      ibc_tx_in_diff,
      total_txs_rating,
      total_txs_rating_diff,
      total_txs_mainnet_rating,
      total_txs_mainnet_rating_diff,
      total_ibc_txs_rating,
      total_ibc_txs_rating_diff,
      total_ibc_txs_mainnet_rating,
      total_ibc_txs_mainnet_rating_diff,
      ibc_tx_out_rating,
      ibc_tx_out_rating_diff,
      ibc_tx_out_mainnet_rating,
      ibc_tx_out_mainnet_rating_diff,
      ibc_tx_in_rating,
      ibc_tx_in_rating_diff,
      ibc_tx_in_mainnet_rating,
      ibc_tx_in_mainnet_rating_diff,
      total_active_addresses,
      total_active_addresses_diff,
      total_active_addresses_weight,
      total_active_addresses_mainnet_weight,
      ibc_tx_failed,
      ibc_tx_out_failed,
      ibc_tx_in_failed,
      ibc_tx_failed_diff,
      total_active_addresses_rating,
      total_active_addresses_rating_diff,
      total_active_addresses_mainnet_rating,
      total_active_addresses_mainnet_rating_diff,
      is_zone_up_to_date,
      is_zone_mainnet,
      zone_readable_name,
      zone_label_url,
      zone_label_url2,
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
        totalTxsRating: isTestnetVisible
          ? total_txs_rating
          : total_txs_mainnet_rating,
        totalTxsRatingDiff: isTestnetVisible
          ? total_txs_rating_diff
          : total_txs_mainnet_rating_diff,
        totalIbcTxsRating: isTestnetVisible
          ? total_ibc_txs_rating
          : total_ibc_txs_mainnet_rating,
        totalIbcTxsRatingDiff: isTestnetVisible
          ? total_ibc_txs_rating_diff
          : total_ibc_txs_mainnet_rating_diff,
        ibcSentRating: isTestnetVisible
          ? ibc_tx_out_rating
          : ibc_tx_out_mainnet_rating,
        ibcSentRatingDiff: isTestnetVisible
          ? ibc_tx_out_rating_diff
          : ibc_tx_out_mainnet_rating_diff,
        ibcReceivedRating: isTestnetVisible
          ? ibc_tx_in_rating
          : ibc_tx_in_mainnet_rating,
        ibcReceivedRatingDiff: isTestnetVisible
          ? ibc_tx_in_rating_diff
          : ibc_tx_in_mainnet_rating_diff,
        totalActiveAddresses: total_active_addresses,
        totalActiveAddressesDiff: total_active_addresses_diff,
        totalActiveAddressesWeight:
          (isTestnetVisible
            ? total_active_addresses_weight
            : total_active_addresses_mainnet_weight) *
            10 +
          1,
        ibcTxFailed: ibc_tx_failed,
        ibcTxOutFailed: ibc_tx_out_failed,
        ibcTxInFailed: ibc_tx_in_failed,
        ibcTxFailedDiff: ibc_tx_failed_diff,
        totalActiveAddressesRating: isTestnetVisible
          ? total_active_addresses_rating
          : total_active_addresses_mainnet_rating,
        totalActiveAddressesRatingDiff: isTestnetVisible
          ? total_active_addresses_rating_diff
          : total_active_addresses_mainnet_rating_diff,
        color: total_ibc_txs
          ? getZoneColor(ibc_tx_out / total_ibc_txs)
          : DEFAULT_COLOR,
        ibcTxsWeight: getNodeWeight(
          isTestnetVisible
            ? total_ibc_txs_weight
            : total_ibc_txs_mainnet_weight,
          minIbcTxsWeight,
          ibcTxsScale,
        ),
        txsWeight: getNodeWeight(
          isTestnetVisible ? total_txs_weight : total_txs_mainnet_weight,
          minTxsWeight,
          txsScale,
        ),
        ibcReceivedWeight: getNodeWeight(
          isTestnetVisible ? ibc_tx_in_weight : ibc_tx_in_mainnet_weight,
          minIbcReceivedWeight,
          ibcReceivedScale,
        ),
        ibcSentWeight: getNodeWeight(
          isTestnetVisible ? ibc_tx_out_weight : ibc_tx_out_mainnet_weight,
          minIbcSentWeight,
          ibcSentScale,
        ),
        isZoneUpToDate: is_zone_up_to_date,
        isZoneMainnet: is_zone_mainnet,
        zoneLabelUrl: zone_label_url,
        zoneLabelUrlBig: zone_label_url2,
      };
    },
  );

  let linksFormatted = graph.map(
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

export const useZonesStat = (options, isTestnetVisible) => {
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

  const mainnetZones = useRealtimeQuery(
    ZONES_STAT_QUERY_ONLY_MAINNET,
    ZONES_STAT_SUBSCRIPTION_ONLY_MAINNET,
    options,
  );

  const mainnetGraph = useRealtimeQuery(
    ZONES_GRAPH_QUERY_ONLY_MAINNET,
    ZONES_GRAPH_SUBSCRIPTION_ONLY_MAINNET,
    options,
  );

  return useMemo(
    () =>
      transform(
        isTestnetVisible ? zones?.zones_stats : mainnetZones?.zones_stats,
        isTestnetVisible ? graph?.zones_graphs : mainnetGraph?.zones_graphs,
        isTestnetVisible,
      ),
    [isTestnetVisible, mainnetZones, zones, mainnetGraph, graph],
  );
};

export const useZonesStatFiltered = (zonesStat, filter, focusedZone) => {
  return useMemo(() => {
    if (
      (filter?.columnId &&
        ((filter?.sortOrder && filter?.filterAmount) || filter?.trendLine)) ||
      focusedZone
    ) {
      let nodes = [...(zonesStat?.nodes || [])];
      let links = [...(zonesStat?.links || [])];

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
