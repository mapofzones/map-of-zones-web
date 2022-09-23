import { gql } from '@apollo/client';

export const ZONE_PEERS_SHORT_INFO_V1_FRAGMENT = gql`
  fragment ZonePeersShortInfoV1 on ft_channel_group_stats {
    zoneCounterpartyKey: zone_counterparty
    zoneCounterpartyLogoUrl: zone_counterparty_label_url
    zoneCounterpartyName: zone_counterparty_readable_name
    ibcVolumeIn: ibc_cashflow_in
    ibcVolumeOut: ibc_cashflow_out
    ibcVolumeInPending: ibc_cashflow_in_pending
    ibcVolumeOutPending: ibc_cashflow_out_pending
  }
`;

export const ZONE_PEERS_SHORT_INFO_V2_FRAGMENT = gql`
  fragment ZonePeersShortInfoV2 on flat_channels_stats {
    zoneCounterparty: blockchainByCounterpartyBlockchain {
      zone: network_id
      name
      logoUrl: logo_url
    }
    ibcVolumeIn: ibc_cashflow_in
    ibcVolumeOut: ibc_cashflow_out
    ibcVolumeInPending: ibc_cashflow_in_pending
    ibcVolumeOutPending: ibc_cashflow_out_pending
  }
`;
