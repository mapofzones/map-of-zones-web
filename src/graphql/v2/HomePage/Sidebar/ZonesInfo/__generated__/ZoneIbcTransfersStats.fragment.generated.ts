/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneIbcTransfersStatsV1Fragment = {
  ibcTransfers?: number | null;
  ibcTransfersPending?: number | null;
  ibcTransfersRating?: number | null;
  ibcTransfersRatingDiff?: number | null;
};

export type ZoneIbcTransfersStatsV2Fragment = {
  ibcTransfers: number;
  ibcTransfersPending: number;
  ibcTransfersRating: number;
  ibcTransfersRatingDiff: number;
};

export const ZoneIbcTransfersStatsV1FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneIbcTransfersStatsV1' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcTransfers' },
            name: { kind: 'Name', value: 'ibc_transfers_mainnet' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcTransfersPending' },
            name: { kind: 'Name', value: 'ibc_transfers_pending_mainnet' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcTransfersRating' },
            name: { kind: 'Name', value: 'ibc_transfers_mainnet_rating' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcTransfersRatingDiff' },
            name: { kind: 'Name', value: 'ibc_transfers_mainnet_rating_diff' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneIbcTransfersStatsV1Fragment, unknown>;
export const ZoneIbcTransfersStatsV2FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneIbcTransfersStatsV2' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'flat_blockchain_switched_stats' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
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
            alias: { kind: 'Name', value: 'ibcTransfersRating' },
            name: { kind: 'Name', value: 'ibc_transfers_rating' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcTransfersRatingDiff' },
            name: { kind: 'Name', value: 'ibc_transfers_rating_diff' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneIbcTransfersStatsV2Fragment, unknown>;
