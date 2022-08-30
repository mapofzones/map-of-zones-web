/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZonesListZonePeersQueryVariables = Types.Exact<{
  source: Types.Scalars['String'];
  period: Types.Scalars['Int'];
}>;

export type ZonesListZonePeersQueryResult = {
  zoneChannels: Array<{
    zoneCounterpartyChannelId: string;
    channelId: string;
    clientId: string;
    connectionId: string;
    isOpened: boolean;
    ibcTransfers: number;
    ibcTransfersPending: number;
    ibcTransfersFailed: number;
    ibcTransfersSuccessRate: any;
    ibcVolumeIn: any;
    ibcVolumeInPending: any;
    ibcVolumeOut: any;
    ibcVolumeOutPending: any;
    zoneCounterparty: {
      name: string;
      zone: string;
      logoUrl?: string | null;
      isUpToDate?: boolean | null;
    };
  }>;
};

export const ZonesListZonePeersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonesListZonePeers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'source' } },
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
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zoneChannels' },
            name: { kind: 'Name', value: 'flat_channels_stats' },
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
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'source' } },
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
                      name: { kind: 'Name', value: 'blockchainByCounterpartyBlockchain' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'is_mainnet' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: { kind: 'BooleanValue', value: true },
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
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zoneCounterparty' },
                  name: { kind: 'Name', value: 'blockchainByCounterpartyBlockchain' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'zone' },
                        name: { kind: 'Name', value: 'network_id' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'logoUrl' },
                        name: { kind: 'Name', value: 'logo_url' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'isUpToDate' },
                        name: { kind: 'Name', value: 'is_synced' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zoneCounterpartyChannelId' },
                  name: { kind: 'Name', value: 'counterparty_channel_id' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'channelId' },
                  name: { kind: 'Name', value: 'channel_id' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'clientId' },
                  name: { kind: 'Name', value: 'client_id' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'connectionId' },
                  name: { kind: 'Name', value: 'connection_id' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'isOpened' },
                  name: { kind: 'Name', value: 'is_channel_open' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfers' },
                  name: { kind: 'Name', value: 'ibc_transfers' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersPending' },
                  name: { kind: 'Name', value: 'ibc_transfers_pending' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersFailed' },
                  name: { kind: 'Name', value: 'ibc_transfers_failed' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersSuccessRate' },
                  name: { kind: 'Name', value: 'ibc_transfers_success_rate' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeIn' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeInPending' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in_pending' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOut' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOutPending' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out_pending' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZonesListZonePeersQueryResult, ZonesListZonePeersQueryVariables>;
