/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneIbcTransfersStatsFragment = {
  __typename?: 'zones_stats';
  ibcTransfers?: number | null;
  ibcTransfersPending?: number | null;
  ibcTransfersRating?: number | null;
  ibcTransfersRatingDiff?: number | null;
};

export const ZoneIbcTransfersStatsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneIbcTransfersStats' },
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
} as unknown as DocumentNode<ZoneIbcTransfersStatsFragment, unknown>;
