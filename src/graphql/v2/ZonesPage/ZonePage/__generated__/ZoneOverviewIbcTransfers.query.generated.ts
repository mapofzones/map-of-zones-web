/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { IbcTransfersFieldAnalysisFragmentDoc } from '../../../common/Zone/Transfers/__generated__/IbcTransfersFieldAnalysis.generated';
import { IbcTransfersInFieldAnalysisFragmentDoc } from '../../../common/Zone/Transfers/__generated__/IbcTransfersInFieldAnalysis.generated';
import { IbcTransfersOutFieldAnalysisFragmentDoc } from '../../../common/Zone/Transfers/__generated__/IbcTransfersOutFieldAnalysis.generated';
import { IbcTransfersChartAnalysisFragmentDoc } from '../../../common/Zone/Transfers/__generated__/IbcTransfersChartAnalysis.generated';
import { IbcTransfersInChartAnalysisFragmentDoc } from '../../../common/Zone/Transfers/__generated__/IbcTransfersInChartAnalysis.generated';
import { IbcTransfersOutChartAnalysisFragmentDoc } from '../../../common/Zone/Transfers/__generated__/IbcTransfersOutChartAnalysis.generated';
export type ZoneOverviewIbcTransfersCardQueryVariables = Types.Exact<{
  zone: Types.Scalars['String'];
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
  periodInDays: Types.Scalars['Int'];
}>;

export type ZoneOverviewIbcTransfersCardQueryResult = {
  ibcTransfersCardData?: {
    ibcTransfers: { aggregate?: { sum?: { value?: any | null } | null } | null };
    ibcTransfersIn: { aggregate?: { sum?: { value?: any | null } | null } | null };
    ibcTransfersOut: { aggregate?: { sum?: { value?: any | null } | null } | null };
    ibcTransfersChart: Array<{ value?: any | null; time: number }>;
    ibcTransfersInChart: Array<{ value?: any | null; time: number }>;
    ibcTransfersOutChart: Array<{ value?: any | null; time: number }>;
  } | null;
};

export const ZoneOverviewIbcTransfersCardDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZoneOverviewIbcTransfersCard' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'period' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'isMainnet' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'periodInDays' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcTransfersCardData' },
            name: { kind: 'Name', value: 'flat_blockchain_switched_stats_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'blockchain' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'zone' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'timeframe' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'period' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'is_mainnet' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'isMainnet' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcTransfersFieldAnalysis' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcTransfersInFieldAnalysis' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcTransfersOutFieldAnalysis' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcTransfersChartAnalysis' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcTransfersInChartAnalysis' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcTransfersOutChartAnalysis' },
                },
              ],
            },
          },
        ],
      },
    },
    ...IbcTransfersFieldAnalysisFragmentDoc.definitions,
    ...IbcTransfersInFieldAnalysisFragmentDoc.definitions,
    ...IbcTransfersOutFieldAnalysisFragmentDoc.definitions,
    ...IbcTransfersChartAnalysisFragmentDoc.definitions,
    ...IbcTransfersInChartAnalysisFragmentDoc.definitions,
    ...IbcTransfersOutChartAnalysisFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  ZoneOverviewIbcTransfersCardQueryResult,
  ZoneOverviewIbcTransfersCardQueryVariables
>;
