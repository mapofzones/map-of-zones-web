import { gql } from '@apollo/client';

import { StatCharts } from 'graphql/chart-types';

export const ZONE_TOTAL_TXS_CARD_V1_FRAGMENT = gql`
  fragment ZoneTotalTxsCardV1 on zones_stats {
    totalTxs: total_txs
  }
`;

export const ZONE_TOTAL_TXS_CARD_V2_FRAGMENT = gql`
  fragment ZoneTotalTxsCardV2 on flat_blockchain_stats {
    totalTxs: txs
    totalTxsChart: blockchain_tf_charts(
      where: { chart_type: { _eq: "${StatCharts.txs}" } }
      order_by: { point_index: asc }
    ) {
      txs: point_value
    }
  }
`;
