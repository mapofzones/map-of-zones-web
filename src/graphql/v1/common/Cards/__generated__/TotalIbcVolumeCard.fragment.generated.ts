/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type TotalIbcVolumeCardFragment = {
  __typename?: 'headers';
  ibcVolume?: any | null;
  ibcVolumePending: any;
  ibcVolumeChart?: any | null;
};

export const TotalIbcVolumeCardFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TotalIbcVolumeCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'headers' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolume' },
            name: { kind: 'Name', value: 'ibc_cashflow_period' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumePending' },
            name: { kind: 'Name', value: 'ibc_cashflow_pending_period' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeChart' },
            name: { kind: 'Name', value: 'chart_cashflow' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TotalIbcVolumeCardFragment, unknown>;
