import { gql } from '@apollo/client';

export const BLOCKCHAIN_PARAMETERS_ANALYSIS = gql`
  fragment BlockchainParametersAnalysis on flat_blockchains {
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
`;
