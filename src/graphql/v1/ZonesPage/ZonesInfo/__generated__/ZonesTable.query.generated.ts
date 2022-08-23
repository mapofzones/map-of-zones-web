/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ZoneBaseInfoFragmentDoc } from '../../../common/Zone/__generated__/ZoneBaseInfo.fragment.generated';
export type ZonesTableQueryVariables = Types.Exact<{
  period: Types.Scalars['Int'];
  orderBy: Types.Zones_Stats_Order_By;
  isMainnet: Types.Scalars['Boolean'];
}>;

export type ZonesTableQueryResult = {
  __typename?: 'query_root';
  zonesTable: Array<{
    __typename?: 'zones_stats';
    zone: string;
    channelsCount?: number | null;
    ibcActiveAddressesMainnetRatingDiff?: number | null;
    ibcDauMainnet?: number | null;
    ibcTransfersChart: any;
    ibcTransfersMainnet?: number | null;
    ibcTransfersMainnetRatingDiff?: number | null;
    ibcTransfersPendingMainnet?: number | null;
    ibcVolumeInMainnet?: any | null;
    ibcVolumeInMainnetRatingDiff?: number | null;
    ibcVolumeInPendingMainnet?: any | null;
    ibcVolumeMainnet?: any | null;
    ibcVolumeMainnetRatingDiff?: number | null;
    ibcVolumeOutMainnet?: any | null;
    ibcVolumeOutMainnetRatingDiff?: number | null;
    ibcVolumeOutPendingMainnet?: any | null;
    ibcVolumePendingMainnet?: any | null;
    isZoneUpToDate?: boolean | null;
    peersCountMainnet?: number | null;
    totalIbcTxsMainnetRatingDiff?: number | null;
    totalTxs?: number | null;
    logoUrl?: string | null;
    name: string;
  }>;
};

export const ZonesTableDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ZonesTable' },
      variableDefinitions: [
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats_order_by' } },
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
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zonesTable' },
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
                      name: { kind: 'Name', value: 'timeframe' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'period' } },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'is_zone_mainnet' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'isMainnet' } },
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
                  kind: 'ListValue',
                  values: [{ kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } }],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZoneBaseInfo' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'channelsCount' },
                  name: { kind: 'Name', value: 'channels_num' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcActiveAddressesMainnetRatingDiff' },
                  name: { kind: 'Name', value: 'ibc_active_addresses_mainnet_rating_diff' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcDauMainnet' },
                  name: { kind: 'Name', value: 'ibc_active_addresses_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersChart' },
                  name: { kind: 'Name', value: 'chart' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersMainnet' },
                  name: { kind: 'Name', value: 'ibc_transfers_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersMainnetRatingDiff' },
                  name: { kind: 'Name', value: 'ibc_transfers_mainnet_rating_diff' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcTransfersPendingMainnet' },
                  name: { kind: 'Name', value: 'ibc_transfers_pending_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeInMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeInMainnetRatingDiff' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in_mainnet_rating_diff' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeInPendingMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_in_pending_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeMainnetRatingDiff' },
                  name: { kind: 'Name', value: 'ibc_cashflow_mainnet_rating_diff' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOutMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOutMainnetRatingDiff' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out_mainnet_rating_diff' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumeOutPendingMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_out_pending_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'ibcVolumePendingMainnet' },
                  name: { kind: 'Name', value: 'ibc_cashflow_pending_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'isZoneUpToDate' },
                  name: { kind: 'Name', value: 'is_zone_up_to_date' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'peersCountMainnet' },
                  name: { kind: 'Name', value: 'ibc_peers_mainnet' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'totalIbcTxsMainnetRatingDiff' },
                  name: { kind: 'Name', value: 'total_ibc_txs_mainnet_rating_diff' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'totalTxs' },
                  name: { kind: 'Name', value: 'total_txs' },
                },
              ],
            },
          },
        ],
      },
    },
    ...ZoneBaseInfoFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ZonesTableQueryResult, ZonesTableQueryVariables>;
