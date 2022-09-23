import { gql } from '@apollo/client';

import { ZONE_BASE_INFO } from 'graphql/v1/common/Zone/ZoneBaseInfo.fragment';

export const ZONES_TABLE = gql`
  ${ZONE_BASE_INFO}
  query ZonesTable($period: Int!, $orderBy: zones_stats_order_by!, $isMainnet: Boolean!) {
    zonesTable: zones_stats(
      where: { timeframe: { _eq: $period }, is_zone_mainnet: { _eq: $isMainnet } }
      order_by: [$orderBy]
    ) {
      ...ZoneBaseInfo
      channelsCount: channels_num
      ibcActiveAddressesMainnetRatingDiff: ibc_active_addresses_mainnet_rating_diff
      ibcDauMainnet: ibc_active_addresses_mainnet
      ibcTransfersChart: chart
      ibcTransfersMainnet: ibc_transfers_mainnet
      ibcTransfersMainnetRatingDiff: ibc_transfers_mainnet_rating_diff
      ibcTransfersPendingMainnet: ibc_transfers_pending_mainnet
      ibcVolumeInMainnet: ibc_cashflow_in_mainnet
      ibcVolumeInMainnetRatingDiff: ibc_cashflow_in_mainnet_rating_diff
      ibcVolumeInPendingMainnet: ibc_cashflow_in_pending_mainnet
      ibcVolumeMainnet: ibc_cashflow_mainnet
      ibcVolumeMainnetRatingDiff: ibc_cashflow_mainnet_rating_diff
      ibcVolumeOutMainnet: ibc_cashflow_out_mainnet
      ibcVolumeOutMainnetRatingDiff: ibc_cashflow_out_mainnet_rating_diff
      ibcVolumeOutPendingMainnet: ibc_cashflow_out_pending_mainnet
      ibcVolumePendingMainnet: ibc_cashflow_pending_mainnet
      isZoneUpToDate: is_zone_up_to_date
      peersCountMainnet: ibc_peers_mainnet
      totalIbcTxsMainnetRatingDiff: total_ibc_txs_mainnet_rating_diff
      totalTxs: total_txs
    }
  }
`;
