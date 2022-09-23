import { gql } from '@apollo/client';

export const ZONE_PEERS_SHORT_INFO_FRAGMENT = gql`
  fragment ZonePeersShortInfo on ft_channel_group_stats {
    zoneCounterpartyKey: zone_counterparty
    zoneCounterpartyLogoUrl: zone_counterparty_label_url
    zoneCounterpartyName: zone_counterparty_readable_name
    ibcVolumeIn: ibc_cashflow_in
    ibcVolumeOut: ibc_cashflow_out
    ibcVolumeInPending: ibc_cashflow_in_pending
    ibcVolumeOutPending: ibc_cashflow_out_pending
  }
`;
