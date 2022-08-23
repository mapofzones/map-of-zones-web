/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ZonePeersShortInfoFragmentDoc } from '../../../HomePage/Sidebar/ZoneDetails/__generated__/ZonePeersShortInfo.fragment.generated';
export type ZonesListZonePeersQueryVariables = Types.Exact<{
  source: Types.Scalars['String'];
  orderBy: Types.Ft_Channel_Group_Stats_Order_By;
  period: Types.Scalars['Int'];
}>;

export type ZonesListZonePeersQueryResult = {
  __typename?: 'query_root';
  zonePeers: Array<{
    __typename?: 'ft_channel_group_stats';
    ibcTransfers: any;
    ibcTransfersPending?: number | null;
    ibcTransfersFailed: any;
    isZoneCounterpartyUpToDate?: boolean | null;
    successRate: any;
    zoneCounterpartyKey: string;
    zoneCounterpartyLogoUrl?: string | null;
    zoneCounterpartyName?: string | null;
    ibcVolumeIn: any;
    ibcVolumeOut: any;
    ibcVolumeInPending: any;
    ibcVolumeOutPending: any;
  }>;
  zoneChannels: Array<{
    __typename?: 'ft_channels_stats';
    channelId: string;
    clientId: string;
    connectionId: string;
    ibcTransfers: any;
    ibcTransfersFailed: any;
    ibcTransfersPending?: number | null;
    ibcVolumeIn: any;
    ibcVolumeInPending: any;
    ibcVolumeOut: any;
    ibcVolumeOutPending: any;
    isOpened: boolean;
    successRate: any;
    zoneCounterpartyChannelId?: string | null;
    zoneCounterpartyKey: string;
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ft_channel_group_stats_order_by' },
            },
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
            alias: { kind: 'Name', value: 'zonePeers' },
            name: { kind: 'Name', value: 'ft_channel_group_stats' },
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
                      name: { kind: 'Name', value: 'is_zone_counterparty_mainnet' },
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
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ListValue',
                  values: [{ kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } }],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZonePeersShortInfo' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfers' },
                  name: { kind: 'Name', value: 'ibc_tx' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersPending' },
                  name: { kind: 'Name', value: 'ibc_tx_pending' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersFailed' },
                  name: { kind: 'Name', value: 'ibc_tx_failed' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'isZoneCounterpartyUpToDate' },
                  name: { kind: 'Name', value: 'is_zone_counterparty_up_to_date' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'successRate' },
                  name: { kind: 'Name', value: 'ibc_tx_success_rate' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zoneChannels' },
            name: { kind: 'Name', value: 'ft_channels_stats' },
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
                      name: { kind: 'Name', value: 'is_zone_counterparty_mainnet' },
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
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
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
                  alias: { kind: 'Name', value: 'ibcTransfers' },
                  name: { kind: 'Name', value: 'ibc_tx' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersFailed' },
                  name: { kind: 'Name', value: 'ibc_tx_failed' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersPending' },
                  name: { kind: 'Name', value: 'ibc_tx_pending' },
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
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'isOpened' },
                  name: { kind: 'Name', value: 'is_opened' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'successRate' },
                  name: { kind: 'Name', value: 'ibc_tx_success_rate' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zoneCounterpartyChannelId' },
                  name: { kind: 'Name', value: 'zone_counterparty_channel_id' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zoneCounterpartyKey' },
                  name: { kind: 'Name', value: 'zone_counterparty' },
                },
              ],
            },
          },
        ],
      },
    },
    ...ZonePeersShortInfoFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ZonesListZonePeersQueryResult, ZonesListZonePeersQueryVariables>;
