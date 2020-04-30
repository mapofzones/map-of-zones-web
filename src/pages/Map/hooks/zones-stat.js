import { useMemo } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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

const MIN_WEIGHT = 0.005;
const DEFAULT_COLOR = '#72727A';

const getMinimumWeight = (zones, key) =>
  Math.min(1, ...zones.map(({ [key]: weight }) => weight).filter(Boolean)) / 2;

const transform = data => {
  if (!data) {
    return data;
  }

  const { zones, graph } = data.get_nodes_stats_with_graph_on_period[0];

  const asd = zones.reduce(
    (
      acc,
      {
        total_ibc_txs_weight,
        total_txs_weight,
        ibc_tx_in_weight,
        ibc_tx_out_weight,
      },
    ) => acc + total_ibc_txs_weight,
    0,
  );

  const defaultIbcTxsWeight = getMinimumWeight(zones, 'total_ibc_txs_weight');
  const defaultTxsWeight = getMinimumWeight(zones, 'total_txs_weight');
  const defaultIbcReceivedWeight = getMinimumWeight(zones, 'ibc_tx_in_weight');
  const defaultIbcSentWeight = getMinimumWeight(zones, 'ibc_tx_out_weight');

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
        totalIbcTxs: total_ibc_txs,
        ibcPercentage: ibc_percent,
        ibcSent: ibc_tx_out,
        ibcSentPercentage: ibc_tx_out / total_ibc_txs || 0,
        ibcReceived: ibc_tx_in,
        ibcReceivedPercentage: ibc_tx_in / total_ibc_txs || 0,
        channels: channels_num,
        color: total_ibc_txs
          ? getZoneColor(ibc_tx_out / total_ibc_txs)
          : DEFAULT_COLOR,
        ibcTxsWeight: Math.max(
          total_ibc_txs_weight || defaultIbcTxsWeight,
          MIN_WEIGHT,
        ),
        txsWeight: Math.max(total_txs_weight || defaultTxsWeight, MIN_WEIGHT),
        ibcReceivedWeight: Math.max(
          ibc_tx_in_weight || defaultIbcReceivedWeight,
          MIN_WEIGHT,
        ),
        ibcSentWeight: Math.max(
          ibc_tx_out_weight || defaultIbcSentWeight,
          MIN_WEIGHT,
        ),

        totalTxsDiff: total_txs_diff,
        totalIbcTxsDiff: total_ibc_txs_diff,
        ibcSentDiff: ibc_tx_out_diff,
        ibcReceivedDiff: ibc_tx_in_diff,

        totalTxsRatingDiff: total_txs_rating_diff,
        totalIbcTxsRatingDiff: total_ibc_txs_rating_diff,
        ibcSentRatingDiff: ibc_tx_out_rating_diff,
        ibcReceivedRatingDiff: ibc_tx_in_rating_diff,
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
  };
};

export const useZonesStat = options => {
  const { data, ...rest } = useQuery(ZONES_STAT, options);
  const transformedData = useMemo(() => transform(data), [data]);

  return { ...rest, data: transformedData };
};
