/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZonePeersQueryVariables = Types.Exact<{
  source: Types.Scalars['String'];
  period: Types.Scalars['Int'];
}>;

export type ZonePeersQueryResult = {
  __typename?: 'query_root';
  zonePeers: Array<{
    __typename?: 'ft_channel_group_stats';
    zoneCounterpartyKey: string;
    zoneCounterpartyLogoUrl?: string | null;
    zoneCounterpartyName?: string | null;
    ibcVolumeIn: any;
    ibcVolumeOut: any;
    ibcVolumeInPending: any;
    ibcVolumeOutPending: any;
  }>;
};

export const ZonePeersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonePeers' },
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
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zoneCounterpartyKey' },
                  name: { kind: 'Name', value: 'zone_counterparty' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zoneCounterpartyLogoUrl' },
                  name: { kind: 'Name', value: 'zone_counterparty_label_url' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zoneCounterpartyName' },
                  name: { kind: 'Name', value: 'zone_counterparty_readable_name' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeIn' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOut' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeInPending' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in_pending' },
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
} as unknown as DocumentNode<ZonePeersQueryResult, ZonePeersQueryVariables>;
