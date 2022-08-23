/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ZoneIbcVolumeCardFragmentDoc } from '../../../../common/Cards/__generated__/ZoneIbcVolumeCard.fragment.generated';
export type SidebarZoneOverviewQueryVariables = Types.Exact<{
  zone: Types.Scalars['String'];
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
}>;

export type SidebarZoneOverviewQueryResult = {
  __typename?: 'query_root';
  zoneOverview: Array<{
    __typename?: 'zones_stats';
    zone: string;
    totalTxs?: number | null;
    ibcTransfers: number;
    peersCountMainnet?: number | null;
    channelsCount?: number | null;
    ibcDauMainnet?: number | null;
    ibcVolumeChart?: any | null;
    ibcVolumeMainnet?: any | null;
    ibcVolumeInMainnet?: any | null;
    ibcVolumeOutMainnet?: any | null;
    ibcVolumeInPercent?: any | null;
    ibcVolumeOutPercent?: any | null;
    ibcVolumeInPendingMainnet?: any | null;
    ibcVolumeOutPendingMainnet?: any | null;
  }>;
};

export const SidebarZoneOverviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SidebarZoneOverview' },
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
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZoneIbcVolumeCard' } },
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
    ...ZoneIbcVolumeCardFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<SidebarZoneOverviewQueryResult, SidebarZoneOverviewQueryVariables>;
