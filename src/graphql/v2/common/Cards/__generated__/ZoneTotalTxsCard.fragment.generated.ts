/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZoneTotalTxsCardV1Fragment = { totalTxs?: number | null };

export type ZoneTotalTxsCardV2Fragment = {
  totalTxs: number;
  totalTxsChart: Array<{ txs?: any | null }>;
};

export const ZoneTotalTxsCardV1FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneTotalTxsCardV1' },
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
} as unknown as DocumentNode<ZoneTotalTxsCardV1Fragment, unknown>;
export const ZoneTotalTxsCardV2FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneTotalTxsCardV2' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'flat_blockchain_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'totalTxs' },
            name: { kind: 'Name', value: 'txs' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'totalTxsChart' },
            name: { kind: 'Name', value: 'blockchain_tf_charts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'chart_type' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'StringValue', value: 'txs', block: false },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'point_index' },
                      value: { kind: 'EnumValue', value: 'asc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'txs' },
                  name: { kind: 'Name', value: 'point_value' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZoneTotalTxsCardV2Fragment, unknown>;
