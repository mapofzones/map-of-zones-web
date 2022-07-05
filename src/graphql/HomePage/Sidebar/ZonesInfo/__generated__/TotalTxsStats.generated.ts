/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type TotalTxsStatsFragment = {
  __typename?: 'zones_stats';
  totalTxs?: number | null;
  totalTxsRating?: number | null;
  totalTxsRatingDiff?: number | null;
};

export const TotalTxsStatsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TotalTxsStats' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'totalTxs' },
            name: { kind: 'Name', value: 'total_txs' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'totalTxsRating' },
            name: { kind: 'Name', value: 'total_txs_mainnet_rating' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'totalTxsRatingDiff' },
            name: { kind: 'Name', value: 'total_txs_mainnet_rating_diff' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TotalTxsStatsFragment, unknown>;
