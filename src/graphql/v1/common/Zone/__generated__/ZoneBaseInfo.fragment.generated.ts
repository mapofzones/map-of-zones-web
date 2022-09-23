/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneBaseInfoFragment = {
  __typename?: 'zones_stats';
  zone: string;
  logoUrl?: string | null;
  name: string;
};

export const ZoneBaseInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneBaseInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'zone' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'logoUrl' },
            name: { kind: 'Name', value: 'zone_label_url' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'name' },
            name: { kind: 'Name', value: 'zone_readable_name' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneBaseInfoFragment, unknown>;
