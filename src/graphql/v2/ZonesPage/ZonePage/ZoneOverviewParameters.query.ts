import { gql } from '@apollo/client';

export const ZONE_OVERVIEW_PARAMETERS = gql`
  query ZoneOverviewParameters($zone: String!) {
    blockchain: flat_blockchains(where: { network_id: { _eq: $zone } }) {
      inflation
      stackingApr: staking_apr
      unbondingPeriod: unbonding_period
      token {
        onChainSupply: on_chain_supply
      }
      bondedTokens: bonded_tokens
      bondedTokensPercent: bonded_tokens_percent
      validatorsCnt: validators_cnt
      nodesCnt: nodes_cnt
    }
  }
`;
