/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneOverviewQueryVariables = Types.Exact<{
  zone: Types.Scalars['String'];
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
}>;

export type ZoneOverviewQueryResult = {
  readonly __typename?: 'query_root';
  readonly zoneOverview: ReadonlyArray<{
    readonly __typename?: 'zones_stats';
    readonly zone: string;
    readonly ibcVolumeMainnet?: any | null;
    readonly ibcVolumeInMainnet?: any | null;
    readonly ibcVolumeOutMainnet?: any | null;
    readonly ibcVolumeInPendingMainnet?: any | null;
    readonly ibcVolumeOutPendingMainnet?: any | null;
    readonly totalTxs?: number | null;
    readonly ibcTransfers: number;
    readonly peersCountMainnet?: number | null;
    readonly channelsCount?: number | null;
    readonly ibcDauMainnet?: number | null;
  }>;
};

export const ZoneOverviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZoneOverview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
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
            alias: { kind: 'Name', value: 'zoneOverview' },
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
                      name: { kind: 'Name', value: 'zone' },
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
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'zone' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeInMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOutMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeInPendingMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in_pending_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOutPendingMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out_pending_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'totalTxs' },
                  name: { kind: 'Name', value: 'total_txs' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfers' },
                  name: { kind: 'Name', value: 'ibc_transfers' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'peersCountMainnet' },
                  name: { kind: 'Name', value: 'ibc_peers_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'channelsCount' },
                  name: { kind: 'Name', value: 'channels_num' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcDauMainnet' },
                  name: { kind: 'Name', value: 'ibc_active_addresses_mainnet' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneOverviewQueryResult, ZoneOverviewQueryVariables>;
