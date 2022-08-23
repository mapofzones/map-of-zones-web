/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type TotalIbcTransfersCardFragment = {
  __typename?: 'headers';
  ibcTransfers: number;
  ibcTransfersPending: number;
};

export const TotalIbcTransfersCardFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TotalIbcTransfersCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'headers' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcTransfers' },
            name: { kind: 'Name', value: 'ibc_transfers_period' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcTransfersPending' },
            name: { kind: 'Name', value: 'ibc_transfers_pending_period' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TotalIbcTransfersCardFragment, unknown>;
