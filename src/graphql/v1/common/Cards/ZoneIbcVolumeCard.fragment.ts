import { gql } from '@apollo/client';

export const ZONE_IBC_VOLUME_CARD_FRAGMENT = gql`
  fragment ZoneIbcVolumeCard on zones_stats {
    ibcVolumeChart: chart_cashflow
    ibcVolumeMainnet: ibc_cashflow_mainnet
    ibcVolumeInMainnet: ibc_cashflow_in_mainnet
    ibcVolumeOutMainnet: ibc_cashflow_out_mainnet
    ibcVolumeInPercent: ibc_cashflow_in_percent_mainnet
    ibcVolumeOutPercent: ibc_cashflow_out_percent_mainnet
    ibcVolumeInPendingMainnet: ibc_cashflow_in_pending_mainnet
    ibcVolumeOutPendingMainnet: ibc_cashflow_out_pending_mainnet
  }
`;
