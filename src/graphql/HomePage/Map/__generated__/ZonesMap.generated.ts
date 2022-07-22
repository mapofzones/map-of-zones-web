/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZonesMapQueryVariables = Types.Exact<{
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
}>;

export type ZonesMapQueryResult = {
  __typename?: 'query_root';
  zonesStats: Array<{
    __typename?: 'zones_stats';
    zone: string;
    ibcVolume?: any | null;
    isMainnet: boolean;
    logoUrl?: string | null;
    name: string;
  }>;
  zonesGraphs: Array<{
    __typename?: 'zones_graphs';
    source: string;
    target: string;
    ibcVolume?: any | null;
  }>;
};

export const ZonesMapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonesMap' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'period' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'isMainnet' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zonesStats' },
            name: { kind: 'Name', value: 'zones_stats' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'timeframe' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'period' } },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'is_zone_mainnet' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'isMainnet' } },
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
                      name: { kind: 'Name', value: 'ibc_tx_in' },
                      value: { kind: 'EnumValue', value: 'asc' },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'zone' },
                      value: { kind: 'EnumValue', value: 'asc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'zone' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolume' },
                  name: { kind: 'Name', value: 'ibc_cashflow_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'isMainnet' },
                  name: { kind: 'Name', value: 'is_zone_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'logoUrl' },
                  name: { kind: 'Name', value: 'zone_label_url' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'name' },
                  name: { kind: 'Name', value: 'zone_readable_name' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zonesGraphs' },
            name: { kind: 'Name', value: 'zones_graphs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'timeframe' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'period' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'source' } },
                { kind: 'Field', name: { kind: 'Name', value: 'target' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolume' },
                  name: { kind: 'Name', value: 'ibc_cashflow' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZonesMapQueryResult, ZonesMapQueryVariables>;
