/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneOverviewTokenQueryVariables = Types.Exact<{
  zone: Types.Scalars['String'];
}>;

export type ZoneOverviewTokenQueryResult = {
  overviewToken: Array<{
    symbol?: string | null;
    price?: any | null;
    logoUrl?: string | null;
    priceDayDiffPercent?: any | null;
    priceWeekDiffPercent?: any | null;
    marketCap?: any | null;
    tradingVolumeDay?: any | null;
    priceChart: Array<{ price: any }>;
    volumeChart: Array<{ volume: any }>;
  }>;
};

export const ZoneOverviewTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZoneOverviewToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'overviewToken' },
            name: { kind: 'Name', value: 'flat_tokens' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'blockchain' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'logoUrl' },
                  name: { kind: 'Name', value: 'logo_url' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'priceDayDiffPercent' },
                  name: { kind: 'Name', value: 'price_day_diff_percent' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'priceWeekDiffPercent' },
                  name: { kind: 'Name', value: 'price_week_diff_percent' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'marketCap' },
                  name: { kind: 'Name', value: 'market_cap' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'tradingVolumeDay' },
                  name: { kind: 'Name', value: 'token_day_trading_volume' },
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
                                  value: { kind: 'StringValue', value: 'price', block: false },
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
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'volumeChart' },
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
                                  value: { kind: 'StringValue', value: 'volume', block: false },
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
      },
    },
  ],
} as unknown as DocumentNode<ZoneOverviewTokenQueryResult, ZoneOverviewTokenQueryVariables>;
