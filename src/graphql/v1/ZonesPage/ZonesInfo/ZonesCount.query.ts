import { gql } from '@apollo/client';

export const ZONES_COUNT = gql`
  query ZonesCount($period: Int!, $isMainnet: Boolean!) {
    headers(where: { timeframe: { _eq: $period }, is_mainnet_only: { _eq: $isMainnet } }) {
      allZonesCount: zones_cnt_all
      activeZonesCount: zones_cnt_period
    }
  }
`;
