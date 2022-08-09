import { gql } from '@apollo/client';

export const TOTAL_IBC_VOLUME_CARD_FRAGMENT = gql`
  fragment TotalIbcVolumeCard on headers {
    ibcVolume: ibc_cashflow_period
    ibcVolumePending: ibc_cashflow_pending_period
    ibcVolumeChart: chart_cashflow
  }
`;
