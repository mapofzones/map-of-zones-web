/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZonesTotalInfoQueryVariables = Types.Exact<{
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
}>;

export type ZonesTotalInfoQueryResult = {
  __typename?: 'query_root';
  headers: Array<{
    __typename?: 'headers';
    activeChannels: number;
    allChannels: number;
    ibcVolume?: any | null;
    ibcVolumeTopPair?: any | null;
    ibcVolumeChart?: any | null;
    ibcVolumePending: any;
    ibcTransfers: number;
    ibcTransfersTopPair?: any | null;
    ibcTransfersPending: number;
    ibcTransfersFailed: number;
  }>;
};

export const ZonesTotalInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonesTotalInfo' },
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
            name: { kind: 'Name', value: 'headers' },
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
                      name: { kind: 'Name', value: 'is_mainnet_only' },
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
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'activeChannels' },
                  name: { kind: 'Name', value: 'channels_cnt_period' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'allChannels' },
                  name: { kind: 'Name', value: 'channels_cnt_all' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolume' },
                  name: { kind: 'Name', value: 'ibc_cashflow_period' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeTopPair' },
                  name: { kind: 'Name', value: 'top_ibc_cashflow_zone_pair' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeChart' },
                  name: { kind: 'Name', value: 'chart_cashflow' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumePending' },
                  name: { kind: 'Name', value: 'ibc_cashflow_pending_period' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfers' },
                  name: { kind: 'Name', value: 'ibc_transfers_period' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersTopPair' },
                  name: { kind: 'Name', value: 'top_transfer_zone_pair' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersPending' },
                  name: { kind: 'Name', value: 'ibc_transfers_pending_period' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersFailed' },
                  name: { kind: 'Name', value: 'ibc_transfers_failed_period' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZonesTotalInfoQueryResult, ZonesTotalInfoQueryVariables>;
