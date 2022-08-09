import { gql } from '@apollo/client';

export const ZONE_TOTAL_TXS_CARD_FRAGMENT = gql`
  fragment ZoneTotalTxsCard on zones_stats {
    totalTxs: total_txs
  }
`;
