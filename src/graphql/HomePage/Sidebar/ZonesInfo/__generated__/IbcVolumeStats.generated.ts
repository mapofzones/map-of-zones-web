/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type IbcVolumeStatsFragment = {
  __typename?: 'zones_stats';
  ibcVolume?: any | null;
  ibcVolumePending: any;
  ibcVolumeRating?: number | null;
  ibcVolumeRatingDiff?: number | null;
};

export const IbcVolumeStatsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'IbcVolumeStats' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats' } },
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
} as unknown as DocumentNode<IbcVolumeStatsFragment, unknown>;
