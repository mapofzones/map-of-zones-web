import { gql } from '@apollo/client';

import { IBC_VOLUME_CHART_ANALYSIS } from 'graphql/v2/common/Zone/IbcVolumeChartAnalysis.fragment';
import { IBC_VOLUME_ANALYSIS } from 'graphql/v2/common/Zone/IbcVolumeFieldAnalysis.fragment';
import { IBC_VOLUME_IN_ANALYSIS } from 'graphql/v2/common/Zone/IbcVolumeInAnalysis.fragment';
import { IBC_VOLUME_IN_CHART_ANALYSIS } from 'graphql/v2/common/Zone/IbcVolumeInChartAnalysis.fragment';
import { IBC_VOLUME_OUT_ANALYSIS } from 'graphql/v2/common/Zone/IbcVolumeOutAnalysis.fragment';
import { IBC_VOLUME_OUT_CHART_ANALYSIS } from 'graphql/v2/common/Zone/IbcVolumeOutChartAnalysis.fragment';

export const ZONE_OVERVIEW_IBC_VOLUME = gql`
  ${IBC_VOLUME_ANALYSIS}
  ${IBC_VOLUME_IN_ANALYSIS}
  ${IBC_VOLUME_OUT_ANALYSIS}
  ${IBC_VOLUME_CHART_ANALYSIS}
  ${IBC_VOLUME_IN_CHART_ANALYSIS}
  ${IBC_VOLUME_OUT_CHART_ANALYSIS}
  query ZoneOverviewIbcVolume(
    $zone: String!
    $period: Int!
    $isMainnet: Boolean!
    $periodInDays: Int!
  ) {
    ibcVolumeCardData: flat_blockchain_switched_stats_by_pk(
      blockchain: $zone
      timeframe: $period
      is_mainnet: $isMainnet
    ) {
      ...IbcVolumeFieldAnalysis
      ...IbcVolumeInFieldAnalysis
      ...IbcVolumeOutFieldAnalysis
      ...IbcVolumeChartAnalysis
      ...IbcVolumeInChartAnalysis
      ...IbcVolumeOutChartAnalysis
    }
  }
`;
