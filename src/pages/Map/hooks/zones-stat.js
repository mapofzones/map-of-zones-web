import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ZONES_STAT = gql`
  query ZonesStat($period: Int!, $step: Int!) {
    get_full_stats_for_each_zone(
      args: { period_in_hours: $period, step_in_hours: $step }
    ) {
      channels_num
      chart
      ibc_percent
      ibc_tx_in
      ibc_tx_out
      total_ibc_txs
      total_txs
      zone
      ibc_tx_in_diff
      ibc_tx_in_rating
      ibc_tx_in_rating_diff
      ibc_tx_out_diff
      ibc_tx_out_rating_diff
      ibc_tx_out_rating
      total_ibc_txs_rating
      total_ibc_txs_diff
      total_ibc_txs_rating_diff
      total_txs_diff
      total_txs_rating
      total_txs_rating_diff
    }
  }
`;

const transform = data => {
  if (!data) {
    return data;
  }

  return data.get_full_stats_for_each_zone.map(
    ({
      zone,
      chart,
      total_txs,
      total_ibc_txs,
      ibc_percent,
      ibc_tx_in,
      ibc_tx_out,
      channels_num,
    }) => {
      return {
        name: zone,
        txsActivity: chart,
        totalTxs: total_txs,
        totalIbcTxs: total_ibc_txs,
        ibcPercentage: ibc_percent,
        ibcSent: ibc_tx_out,
        ibcReceived: ibc_tx_in,
        channels: channels_num,
      };
    },
  );
};

export const useZonesStat = options => {
  const { data, ...rest } = useQuery(ZONES_STAT, options);

  return { ...rest, data: transform(data) };
};
