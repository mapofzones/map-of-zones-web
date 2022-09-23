/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneIbcVolumeStatsV1Fragment = {
  ibcVolume?: any | null;
  ibcVolumePending?: any | null;
  ibcVolumeRating?: number | null;
  ibcVolumeRatingDiff?: number | null;
};

export type ZoneIbcVolumeStatsV2Fragment = {
  ibcVolume: any;
  ibcVolumePending: any;
  ibcVolumeRating: number;
  ibcVolumeRatingDiff: number;
};

export const ZoneIbcVolumeStatsV1FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneIbcVolumeStatsV1' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolume' },
            name: { kind: 'Name', value: 'ibc_cashflow_mainnet' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumePending' },
            name: { kind: 'Name', value: 'ibc_cashflow_pending_mainnet' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeRating' },
            name: { kind: 'Name', value: 'ibc_cashflow_mainnet_rating' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeRatingDiff' },
            name: { kind: 'Name', value: 'ibc_cashflow_mainnet_rating_diff' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneIbcVolumeStatsV1Fragment, unknown>;
export const ZoneIbcVolumeStatsV2FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneIbcVolumeStatsV2' },
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
            alias: { kind: 'Name', value: 'ibcVolumePending' },
            name: { kind: 'Name', value: 'ibc_cashflow_pending' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeRating' },
            name: { kind: 'Name', value: 'ibc_cashflow_rating' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeRatingDiff' },
            name: { kind: 'Name', value: 'ibc_cashflow_rating_diff' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneIbcVolumeStatsV2Fragment, unknown>;
