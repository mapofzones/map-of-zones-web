import { gql } from '@apollo/client';

import { ZONE_BASE_INFO_V2 } from 'graphql/v2/common/Zone/ZoneBaseInfo.fragment';

export const ZONES_TABLE = gql`
  ${ZONE_BASE_INFO_V2}
  query ZonesTable($period: Int!, $isMainnet: Boolean!) {
    zonesTable: flat_blockchains(where: { is_mainnet: { _eq: $isMainnet } }) {
      ...ZoneBaseInfoV2
      isZoneUpToDate: is_synced
      switchedStats: blockchain_switched_stats(
        where: { is_mainnet: { _eq: $isMainnet }, timeframe: { _eq: $period } }
      ) {
        channelsCount: channels_cnt
        peersCount: ibc_peers
        # ibc transfers
        ibcTransfers: ibc_transfers
        ibcTransfersPending: ibc_transfers_pending
        ibcTransfersRating: ibc_transfers_rating
        ibcTransfersRatingDiff: ibc_transfers_rating_diff
        ibcTransfersChart: blockchain_tf_switched_charts(
          where: { chart_type: { _eq: "transfers" } }
          order_by: { point_index: asc }
        ) {
          transfers: point_value
        }
        # ibc volume
        ibcVolume: ibc_cashflow
        ibcVolumePending: ibc_cashflow_pending
        ibcVolumeRating: ibc_cashflow_rating
        ibcVolumeRatingDiff: ibc_cashflow_rating_diff
        ibcVolumeIn: ibc_cashflow_in
        ibcVolumeInPending: ibc_cashflow_in_pending
        ibcVolumeInRating: ibc_cashflow_in_rating
        ibcVolumeInRatingDiff: ibc_cashflow_in_rating_diff
        ibcVolumeOut: ibc_cashflow_out
        ibcVolumeOutPending: ibc_cashflow_out_pending
        ibcVolumeOutRating: ibc_cashflow_out_rating
        ibcVolumeOutRatingDiff: ibc_cashflow_out_rating_diff
        # txs
        totalIbcTxsRating: txs_rating
        totalIbcTxsRatingDiff: txs_rating_diff
        # dau
        ibcDauRating: ibc_active_addresses_cnt_rating
        ibcDauRatingDiff: ibc_active_addresses_cnt_rating_diff
      }
      stats: blockchain_stats(where: { timeframe: { _eq: $period } }) {
        totalTxs: txs
        ibcDau: ibc_active_addresses_cnt
      }
    }
  }
`;
