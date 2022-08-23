import { gql } from '@apollo/client';

import { ZONE_BASE_INFO_V1 } from '../common/Zone/ZoneBaseInfo.fragment';

export const ZONES_MAP = gql`
  ${ZONE_BASE_INFO_V1}
  query ZonesMap($period: Int!, $isMainnet: Boolean!) {
    zonesStats: zones_stats(
      where: { timeframe: { _eq: $period }, is_zone_mainnet: { _eq: $isMainnet } }
      order_by: { ibc_tx_in: asc, zone: asc }
    ) {
      ...ZoneBaseInfoV1
      isMainnet: is_zone_mainnet
      ibcVolume: ibc_cashflow_mainnet
      ibcVolumeIn: ibc_cashflow_in_mainnet
      ibcVolumeOut: ibc_cashflow_out_mainnet
    }
    zonesGraphs: zones_graphs(where: { timeframe: { _eq: $period } }) {
      # , is_mainnet: { _eq:  }
      source
      target
      # ibc_transfers
      ibcVolume: ibc_cashflow
    }
  }
`;
