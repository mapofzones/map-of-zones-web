/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AseetsTableQueryVariables = Types.Exact<{ [key: string]: never }>;

export type AseetsTableQueryResult = {
  assets: Array<{
    symbol?: string | null;
    price?: any | null;
    logoUrl?: string | null;
    price24hDiffPercent?: any | null;
    price7dDiffPercent?: any | null;
    marketCap?: any | null;
    volume24h?: any | null;
    volume24hDiffPercent?: any | null;
    onChainSupply?: any | null;
    blockchain: { name: string };
    priceChart: Array<{ price?: any | null }>;
  }>;
};

export const AseetsTableDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AseetsTable' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'assets' },
            name: { kind: 'Name', value: 'flat_tokens' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'blockchain' },
                  name: { kind: 'Name', value: 'blockchainByBlockchain' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'logoUrl' },
                  name: { kind: 'Name', value: 'logo_url' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'price24hDiffPercent' },
                  name: { kind: 'Name', value: 'price_day_diff_percent' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'price7dDiffPercent' },
                  name: { kind: 'Name', value: 'price_week_diff_percent' },
                },
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
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'volume24hDiffPercent' },
                  name: { kind: 'Name', value: 'token_day_trading_volume_diff_percent' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'onChainSupply' },
                  name: { kind: 'Name', value: 'on_chain_supply' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'priceChart' },
                  name: { kind: 'Name', value: 'token_charts' },
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
                                  value: {
                                    kind: 'StringValue',
                                    value: 'price_weekly',
                                    block: false,
                                  },
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
                        alias: { kind: 'Name', value: 'price' },
                        name: { kind: 'Name', value: 'point_value' },
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
  ],
} as unknown as DocumentNode<AseetsTableQueryResult, AseetsTableQueryVariables>;
