import { gql } from '@apollo/client';

import { ZONE_BASE_INFO_V2 } from '../common/Zone/ZoneBaseInfo.fragment';

export const ZONES_MAP = gql`
  ${ZONE_BASE_INFO_V2}
  query ZonesMap($period: Int!, $isMainnet: Boolean!) {
    zonesStats: flat_blockchains(where: { is_mainnet: { _eq: $isMainnet } }) {
      ...ZoneBaseInfoV2
      isMainnet: is_mainnet
      switchedStats: blockchain_switched_stats(
        where: { timeframe: { _eq: $period }, is_mainnet: { _eq: $isMainnet } }
      ) {
        ibcVolume: ibc_cashflow
        ibcVolumeIn: ibc_cashflow_in
        ibcVolumeOut: ibc_cashflow_out
        ibcVolumeRating: ibc_cashflow_rating
        ibcTransfersRating: ibc_transfers_rating
        dauRating: active_addresses_cnt_rating
        totalTxsRating: txs_rating
      }
    }
    zonesGraphs: flat_blockchain_relations(
      where: {
        blockchain: { is_mainnet: { _eq: $isMainnet } }
        blockchainByBlockchainSource: { is_mainnet: { _eq: $isMainnet } }
        timeframe: { _eq: $period }
      }
    ) {
      source: blockchain_source
      target: blockchain_target
      ibcVolume: ibc_cashflow
    }
  }
`;
