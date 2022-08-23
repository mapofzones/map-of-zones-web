import { gql } from '@apollo/client';

import { TOTAL_IBC_TRANSFERS_CARD_FRAGMENT } from 'graphql/v1/common/Cards/TotalIbcTransfersCard.fragment';
import { TOTAL_IBC_VOLUME_CARD_FRAGMENT } from 'graphql/v1/common/Cards/TotalIbcVolumeCard.fragment';

export const ZONES_TOTAL_INFO = gql`
  ${TOTAL_IBC_VOLUME_CARD_FRAGMENT}
  ${TOTAL_IBC_TRANSFERS_CARD_FRAGMENT}
  query ZonesTotalInfo($period: Int!, $isMainnet: Boolean!) {
    headers(where: { timeframe: { _eq: $period }, is_mainnet_only: { _eq: $isMainnet } }) {
      ...TotalIbcVolumeCard
      ...TotalIbcTransfersCard
      ibcTransfersFailed: ibc_transfers_failed_period
      activeChannels: channels_cnt_period
      allChannels: channels_cnt_all
      ibcVolumeTopPair: top_ibc_cashflow_zone_pair
      ibcTransfersTopPair: top_transfer_zone_pair
    }
  }
`;
