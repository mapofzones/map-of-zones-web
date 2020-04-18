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

const transform = data => {
  if (!data) {
    return data;
  }

  const { zones, graph } = data.get_nodes_stats_with_graph_on_period[0];

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
    }) => {
      return {
        id: zone,
        name: zone,
        txsActivity: chart,
        totalTxs: total_txs,
        totalIbcTxs: total_ibc_txs,
        ibcPercentage: ibc_percent,
        ibcSent: ibc_tx_out,
        ibcSentPercentage: (ibc_tx_out / total_ibc_txs) || 0,
        ibcReceived: ibc_tx_in,
        ibcReceivedPercentage: (ibc_tx_in / total_ibc_txs) || 0,
        channels: channels_num,
        ibcTxsWeight: total_ibc_txs_weight,
        color: getZoneColor(ibc_tx_out / total_ibc_txs),
      };
    },
  );

  return {
    nodes: zonesFormatted,
    links: graph,
  };
};

export const useZonesStat = options => {
  const { data, ...rest } = useQuery(ZONES_STAT, options);
  const transformedData = useMemo(() => transform(data), [data]);

  return { ...rest, data: transformedData };
};
