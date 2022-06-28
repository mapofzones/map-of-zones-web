/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

import * as Types from '../../../base-types';

export type IbcTransfersStatsFragment = {
  readonly __typename?: 'zones_stats';
  readonly ibcTransfers: number;
  readonly ibcTransfersPending: number;
  readonly ibcTransfersRating?: number | null;
  readonly ibcTransfersRatingDiff?: number | null;
};

export const IbcTransfersStatsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'IbcTransfersStats' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats' } },
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
} as unknown as DocumentNode<IbcTransfersStatsFragment, unknown>;
