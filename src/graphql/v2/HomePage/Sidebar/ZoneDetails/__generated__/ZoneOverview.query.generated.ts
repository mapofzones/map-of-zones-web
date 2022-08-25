/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ZoneIbcVolumeCardV2FragmentDoc } from '../../../../common/Cards/__generated__/ZoneIbcVolumeCard.fragment.generated';
export type SidebarZoneOverviewQueryVariables = Types.Exact<{
  zone: Types.Scalars['String'];
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
}>;

export type SidebarZoneOverviewQueryResult = {
  zoneOverview: Array<{
    ibcTransfers: number;
    peersCount: number;
    channelsCount: number;
    ibcVolume: any;
    ibcVolumeIn: any;
    ibcVolumeOut: any;
    ibcVolumeInPercent: any;
    ibcVolumeOutPercent: any;
    ibcVolumeInPending: any;
    ibcVolumeOutPending: any;
    ibcVolumeChart: Array<{ ibcVolumeChart: any }>;
  }>;
  stats: Array<{ totalTxs: number; ibcDau: number }>;
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
            name: { kind: 'Name', value: 'flat_blockchain_switched_stats' },
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
                      name: { kind: 'Name', value: 'is_mainnet' },
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
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZoneIbcVolumeCardV2' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfers' },
                  name: { kind: 'Name', value: 'ibc_transfers' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'peersCount' },
                  name: { kind: 'Name', value: 'ibc_peers' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'channelsCount' },
                  name: { kind: 'Name', value: 'channels_cnt' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'stats' },
            name: { kind: 'Name', value: 'flat_blockchain_stats' },
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
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'totalTxs' },
                  name: { kind: 'Name', value: 'txs' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcDau' },
                  name: { kind: 'Name', value: 'ibc_active_addresses_cnt' },
                },
              ],
            },
          },
        ],
      },
    },
    ...ZoneIbcVolumeCardV2FragmentDoc.definitions,
  ],
} as unknown as DocumentNode<SidebarZoneOverviewQueryResult, SidebarZoneOverviewQueryVariables>;
