/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ZoneIbcVolumeCardFragmentDoc } from '../../../common/Cards/__generated__/ZoneIbcVolumeCard.fragment.generated';
import { ZoneIbcTransfersCardFragmentDoc } from '../../../common/Cards/__generated__/ZoneIbcTransfersCard.fragment.generated';
import { ZoneTotalTxsCardFragmentDoc } from '../../../common/Cards/__generated__/ZoneTotalTxsCard.fragment.generated';
export type ZoneOverviewActivityFragment = {
  __typename?: 'zones_stats';
  peersCount?: number | null;
  channelsCount?: number | null;
  ibcDauMainnet?: number | null;
  ibcVolumeMainnet?: any | null;
  ibcVolumeInMainnet?: any | null;
  ibcVolumeOutMainnet?: any | null;
  ibcVolumeInPercent?: any | null;
  ibcVolumeOutPercent?: any | null;
  ibcVolumeInPendingMainnet?: any | null;
  ibcVolumeOutPendingMainnet?: any | null;
  ibcTransfers?: number | null;
  ibcTransfersPending?: number | null;
  totalTxs?: number | null;
};

export const ZoneOverviewActivityFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZoneOverviewActivity' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'zones_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZoneIbcVolumeCard' } },
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZoneIbcTransfersCard' } },
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ZoneTotalTxsCard' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'peersCount' },
            name: { kind: 'Name', value: 'ibc_peers_mainnet' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'channelsCount' },
            name: { kind: 'Name', value: 'channels_num' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcDauMainnet' },
            name: { kind: 'Name', value: 'ibc_active_addresses_mainnet' },
          },
        ],
      },
    },
    ...ZoneIbcVolumeCardFragmentDoc.definitions,
    ...ZoneIbcTransfersCardFragmentDoc.definitions,
    ...ZoneTotalTxsCardFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ZoneOverviewActivityFragment, unknown>;
