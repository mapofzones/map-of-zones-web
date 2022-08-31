import { gql } from '@apollo/client';

export const TOTAL_IBC_VOLUME_CARD_V1_FRAGMENT = gql`
  fragment TotalIbcVolumeCardV1 on headers {
    ibcVolume: ibc_cashflow_period
    ibcVolumePending: ibc_cashflow_pending_period
    ibcVolumeChart: chart_cashflow
  }
`;
