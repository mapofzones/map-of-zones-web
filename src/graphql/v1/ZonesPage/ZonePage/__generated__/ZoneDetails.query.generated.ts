/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ZoneBaseInfoFragmentDoc } from '../../../common/Zone/__generated__/ZoneBaseInfo.fragment.generated';
export type ZonesListZoneDetailsQueryVariables = Types.Exact<{
  zone: Types.Scalars['String'];
}>;

export type ZonesListZoneDetailsQueryResult = {
  __typename?: 'query_root';
  zoneDetails: Array<{
    __typename?: 'zones_stats';
    website?: string | null;
    zone: string;
    isZoneUpToDate?: boolean | null;
    peersCount?: number | null;
    logoUrl?: string | null;
    name: string;
  }>;
};

export const ZonesListZoneDetailsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonesListZoneDetails' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zoneDetails' },
            name: { kind: 'Name', value: 'zones_stats' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'zone' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZoneBaseInfo' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'isZoneUpToDate' },
                  name: { kind: 'Name', value: 'is_zone_up_to_date' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'peersCount' },
                  name: { kind: 'Name', value: 'ibc_peers_mainnet' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'website' } },
              ],
            },
          },
        ],
      },
    },
    ...ZoneBaseInfoFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ZonesListZoneDetailsQueryResult, ZonesListZoneDetailsQueryVariables>;
