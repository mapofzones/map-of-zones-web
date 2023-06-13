/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type IbcTransfersOutChartAnalysisFragment = {
  ibcTransfersOutChart: Array<{ value?: any | null; time: number }>;
};

export const IbcTransfersOutChartAnalysisFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'IbcTransfersOutChartAnalysis' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'flat_blockchain_switched_stats' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcTransfersOutChart' },
            name: { kind: 'Name', value: 'blockchain_tf_switched_charts' },
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
                            value: { kind: 'StringValue', value: 'transfers_out', block: false },
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
                  alias: { kind: 'Name', value: 'value' },
                  name: { kind: 'Name', value: 'point_value' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'time' },
                  name: { kind: 'Name', value: 'point_index' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IbcTransfersOutChartAnalysisFragment, unknown>;
