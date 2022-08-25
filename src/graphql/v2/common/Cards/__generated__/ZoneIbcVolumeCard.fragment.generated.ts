/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneIbcVolumeCardV1Fragment = {
  ibcVolumeChart?: any | null;
  ibcVolumeMainnet?: any | null;
  ibcVolumeInMainnet?: any | null;
  ibcVolumeOutMainnet?: any | null;
  ibcVolumeInPercent?: any | null;
  ibcVolumeOutPercent?: any | null;
  ibcVolumeInPendingMainnet?: any | null;
  ibcVolumeOutPendingMainnet?: any | null;
};

export type ZoneIbcVolumeCardV2Fragment = {
  ibcVolume: any;
  ibcVolumeIn: any;
  ibcVolumeOut: any;
  ibcVolumeInPercent: any;
  ibcVolumeOutPercent: any;
  ibcVolumeInPending: any;
  ibcVolumeOutPending: any;
  ibcVolumeChart: Array<{ ibcVolumeChart: any }>;
};

export const ZoneIbcVolumeCardV1FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneIbcVolumeCardV1' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeChart' },
            name: { kind: 'Name', value: 'chart_cashflow' },
          },
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
            alias: { kind: 'Name', value: 'ibcVolumeInPercent' },
            name: { kind: 'Name', value: 'ibc_cashflow_in_percent_mainnet' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeOutPercent' },
            name: { kind: 'Name', value: 'ibc_cashflow_out_percent_mainnet' },
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
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneIbcVolumeCardV1Fragment, unknown>;
export const ZoneIbcVolumeCardV2FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneIbcVolumeCardV2' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'flat_blockchain_switched_stats' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolume' },
            name: { kind: 'Name', value: 'ibc_cashflow' },
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
            alias: { kind: 'Name', value: 'ibcVolumeInPercent' },
            name: { kind: 'Name', value: 'ibc_cashflow_in_percent' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeOutPercent' },
            name: { kind: 'Name', value: 'ibc_cashflow_out_percent' },
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
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeChart' },
            name: { kind: 'Name', value: 'blockchain_tf_switched_charts' },
            arguments: [
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
                  alias: { kind: 'Name', value: 'ibcVolumeChart' },
                  name: { kind: 'Name', value: 'point_value' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneIbcVolumeCardV2Fragment, unknown>;
