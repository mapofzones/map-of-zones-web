/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneIbcVolumeCardFragment = {
  __typename?: 'zones_stats';
  ibcVolumeChart?: any | null;
  ibcVolumeMainnet?: any | null;
  ibcVolumeInMainnet?: any | null;
  ibcVolumeOutMainnet?: any | null;
  ibcVolumeInPercent?: any | null;
  ibcVolumeOutPercent?: any | null;
  ibcVolumeInPendingMainnet?: any | null;
  ibcVolumeOutPendingMainnet?: any | null;
};

export const ZoneIbcVolumeCardFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneIbcVolumeCard' },
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
} as unknown as DocumentNode<ZoneIbcVolumeCardFragment, unknown>;
