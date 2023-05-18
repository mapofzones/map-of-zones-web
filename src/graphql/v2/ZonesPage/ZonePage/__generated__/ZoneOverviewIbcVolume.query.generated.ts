/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { IbcVolumeFieldAnalysisFragmentDoc } from '../../../common/Zone/__generated__/IbcVolumeFieldAnalysis.fragment.generated';
import { IbcVolumeInFieldAnalysisFragmentDoc } from '../../../common/Zone/__generated__/IbcVolumeInAnalysis.fragment.generated';
import { IbcVolumeOutFieldAnalysisFragmentDoc } from '../../../common/Zone/__generated__/IbcVolumeOutAnalysis.fragment.generated';
import { IbcVolumeChartAnalysisFragmentDoc } from '../../../common/Zone/__generated__/IbcVolumeChartAnalysis.fragment.generated';
import { IbcVolumeInChartAnalysisFragmentDoc } from '../../../common/Zone/__generated__/IbcVolumeInChartAnalysis.fragment.generated';
import { IbcVolumeOutChartAnalysisFragmentDoc } from '../../../common/Zone/__generated__/IbcVolumeOutChartAnalysis.fragment.generated';
export type ZoneOverviewIbcVolumeQueryVariables = Types.Exact<{
  zone: Types.Scalars['String'];
  period: Types.Scalars['Int'];
  isMainnet: Types.Scalars['Boolean'];
  periodInDays: Types.Scalars['Int'];
}>;

export type ZoneOverviewIbcVolumeQueryResult = {
  ibcVolumeCardData?: {
    ibcVolume: { aggregate?: { sum?: { volume?: any | null } | null } | null };
    ibcVolumeIn: { aggregate?: { sum?: { volumeIn?: any | null } | null } | null };
    ibcVolumeOut: { aggregate?: { sum?: { volumeOut?: any | null } | null } | null };
    ibcVolumeChart: Array<{ value?: any | null; time: number }>;
    ibcVolumeInChart: Array<{ value?: any | null; time: number }>;
    ibcVolumeOutChart: Array<{ value?: any | null; time: number }>;
  } | null;
};

export const ZoneOverviewIbcVolumeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZoneOverviewIbcVolume' },
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
            alias: { kind: 'Name', value: 'ibcVolumeCardData' },
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
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'IbcVolumeFieldAnalysis' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcVolumeInFieldAnalysis' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcVolumeOutFieldAnalysis' },
                },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'IbcVolumeChartAnalysis' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcVolumeInChartAnalysis' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'IbcVolumeOutChartAnalysis' },
                },
              ],
            },
          },
        ],
      },
    },
    ...IbcVolumeFieldAnalysisFragmentDoc.definitions,
    ...IbcVolumeInFieldAnalysisFragmentDoc.definitions,
    ...IbcVolumeOutFieldAnalysisFragmentDoc.definitions,
    ...IbcVolumeChartAnalysisFragmentDoc.definitions,
    ...IbcVolumeInChartAnalysisFragmentDoc.definitions,
    ...IbcVolumeOutChartAnalysisFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ZoneOverviewIbcVolumeQueryResult, ZoneOverviewIbcVolumeQueryVariables>;
