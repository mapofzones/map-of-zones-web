import { gql } from '@apollo/client';

import { IBC_TRANSFERS_CHART_ANALYSIS } from 'graphql/v2/common/Zone/Transfers/IbcTransfersChartAnalysis';
import { IBC_TRANSFERS_FIELD_ANALYSIS } from 'graphql/v2/common/Zone/Transfers/IbcTransfersFieldAnalysis';
import { IBC_TRANSFERS_IN_CHART_ANALYSIS } from 'graphql/v2/common/Zone/Transfers/IbcTransfersInChartAnalysis';
import { IBC_TRANSFERS_IN_FIELD_ANALYSIS } from 'graphql/v2/common/Zone/Transfers/IbcTransfersInFieldAnalysis';
import { IBC_TRANSFERS_OUT_CHART_ANALYSIS } from 'graphql/v2/common/Zone/Transfers/IbcTransfersOutChartAnalysis';
import { IBC_TRANSFERS_OUT_FIELD_ANALYSIS } from 'graphql/v2/common/Zone/Transfers/IbcTransfersOutFieldAnalysis';

export const ZONE_OVERVIEW_IBC_TRANSFERS = gql`
  ${IBC_TRANSFERS_FIELD_ANALYSIS}
  ${IBC_TRANSFERS_IN_FIELD_ANALYSIS}
  ${IBC_TRANSFERS_OUT_FIELD_ANALYSIS}
  ${IBC_TRANSFERS_CHART_ANALYSIS}
  ${IBC_TRANSFERS_IN_CHART_ANALYSIS}
  ${IBC_TRANSFERS_OUT_CHART_ANALYSIS}
  query ZoneOverviewIbcTransfersCard(
    $zone: String!
    $period: Int!
    $isMainnet: Boolean!
    $periodInDays: Int!
  ) {
    ibcTransfersCardData: flat_blockchain_switched_stats_by_pk(
      blockchain: $zone
      timeframe: $period
      is_mainnet: $isMainnet
    ) {
      ...IbcTransfersFieldAnalysis
      ...IbcTransfersInFieldAnalysis
      ...IbcTransfersOutFieldAnalysis
      ...IbcTransfersChartAnalysis
      ...IbcTransfersInChartAnalysis
      ...IbcTransfersOutChartAnalysis
    }
  }
`;
