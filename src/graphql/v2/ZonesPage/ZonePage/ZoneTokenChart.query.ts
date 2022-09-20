import { gql } from '@apollo/client';

export const ZONE_TOKEN_CHART = gql`
  query ZoneTokenChart($zone: String!, $chartType: String!) {
    overviewBlockchainCharts: flat_blockchains(where: { network_id: { _eq: $zone } }) {
      token {
        chart: token_charts(
          where: { chart_type: { _eq: $chartType } }
          order_by: { point_index: asc }
        ) {
          value: point_value
          time: point_index
        }
      }
    }
  }
`;
