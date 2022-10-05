/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AseetsTotalInfoQueryVariables = Types.Exact<{ [key: string]: never }>;

export type AseetsTotalInfoQueryResult = {
  aggregatedData: {
    aggregate?: {
      count?: number | null;
      sum?: { marketCap?: any | null; volume24h?: any | null } | null;
    } | null;
  };
  marketCapDominance: Array<{
    symbol?: string | null;
    logoUrl?: string | null;
    marketCap?: any | null;
    blockchain: { name: string };
  }>;
  topMover: Array<{
    symbol?: string | null;
    price?: any | null;
    logoUrl?: string | null;
    price24hDiffPercent?: any | null;
    blockchain: { name: string };
  }>;
  total24hTradingVolumeChart: Array<{ volume?: any | null }>;
};

export const AseetsTotalInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AseetsTotalInfo' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'aggregatedData' },
            name: { kind: 'Name', value: 'flat_tokens_aggregate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sum' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'marketCap' },
                              name: { kind: 'Name', value: 'market_cap' },
                            },
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'volume24h' },
                              name: { kind: 'Name', value: 'token_day_trading_volume' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'marketCapDominance' },
            name: { kind: 'Name', value: 'flat_tokens' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'market_cap' },
                      value: { kind: 'EnumValue', value: 'desc_nulls_last' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'logoUrl' },
                  name: { kind: 'Name', value: 'logo_url' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'blockchain' },
                  name: { kind: 'Name', value: 'blockchainByBlockchain' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'marketCap' },
                  name: { kind: 'Name', value: 'market_cap' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'topMover' },
            name: { kind: 'Name', value: 'flat_tokens' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'price_day_diff_percent' },
                      value: { kind: 'EnumValue', value: 'desc_nulls_last' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'logoUrl' },
                  name: { kind: 'Name', value: 'logo_url' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'blockchain' },
                  name: { kind: 'Name', value: 'blockchainByBlockchain' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'price24hDiffPercent' },
                  name: { kind: 'Name', value: 'price_day_diff_percent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total24hTradingVolumeChart' },
            name: { kind: 'Name', value: 'flat_total_tf_switched_charts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'chart_type' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'StringValue', value: 'trading_volume', block: false },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'point_index' },
                      value: { kind: 'EnumValue', value: 'asc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'volume' },
                  name: { kind: 'Name', value: 'point_value' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AseetsTotalInfoQueryResult, AseetsTotalInfoQueryVariables>;
