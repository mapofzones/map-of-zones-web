/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneTotalTxsCardFragment = { __typename?: 'zones_stats'; totalTxs?: number | null };

export const ZoneTotalTxsCardFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneTotalTxsCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'totalTxs' },
            name: { kind: 'Name', value: 'total_txs' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneTotalTxsCardFragment, unknown>;
