/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneDetailsQueryVariables = Types.Exact<{
  zone: Types.Scalars['String'];
}>;

export type ZoneDetailsQueryResult = {
  __typename?: 'query_root';
  zoneDetails: Array<{
    __typename?: 'zones_stats';
    zone: string;
    website?: string | null;
    logoUrl?: string | null;
    name: string;
  }>;
};

export const ZoneDetailsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZoneDetails' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'website' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneDetailsQueryResult, ZoneDetailsQueryVariables>;
