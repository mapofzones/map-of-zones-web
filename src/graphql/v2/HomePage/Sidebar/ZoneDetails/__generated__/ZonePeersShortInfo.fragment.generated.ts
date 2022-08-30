/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../../../base-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ZonePeersShortInfoV1Fragment = {
  zoneCounterpartyKey: string;
  zoneCounterpartyLogoUrl?: string | null;
  zoneCounterpartyName?: string | null;
  ibcVolumeIn: any;
  ibcVolumeOut: any;
  ibcVolumeInPending: any;
  ibcVolumeOutPending: any;
};

export type ZonePeersShortInfoV2Fragment = {
  ibcVolumeIn: any;
  ibcVolumeOut: any;
  ibcVolumeInPending: any;
  ibcVolumeOutPending: any;
  zoneCounterparty: { name: string; zone: string; logoUrl?: string | null };
};

export const ZonePeersShortInfoV1FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZonePeersShortInfoV1' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ft_channel_group_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zoneCounterpartyKey' },
            name: { kind: 'Name', value: 'zone_counterparty' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zoneCounterpartyLogoUrl' },
            name: { kind: 'Name', value: 'zone_counterparty_label_url' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zoneCounterpartyName' },
            name: { kind: 'Name', value: 'zone_counterparty_readable_name' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeIn' },
            name: { kind: 'Name', value: 'ibc_cashflow_in' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeOut' },
            name: { kind: 'Name', value: 'ibc_cashflow_out' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeInPending' },
            name: { kind: 'Name', value: 'ibc_cashflow_in_pending' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeOutPending' },
            name: { kind: 'Name', value: 'ibc_cashflow_out_pending' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZonePeersShortInfoV1Fragment, unknown>;
export const ZonePeersShortInfoV2FragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ZonePeersShortInfoV2' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'flat_channels_stats' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'zoneCounterparty' },
            name: { kind: 'Name', value: 'blockchainByCounterpartyBlockchain' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'zone' },
                  name: { kind: 'Name', value: 'network_id' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'logoUrl' },
                  name: { kind: 'Name', value: 'logo_url' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeIn' },
            name: { kind: 'Name', value: 'ibc_cashflow_in' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeOut' },
            name: { kind: 'Name', value: 'ibc_cashflow_out' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeInPending' },
            name: { kind: 'Name', value: 'ibc_cashflow_in_pending' },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ibcVolumeOutPending' },
            name: { kind: 'Name', value: 'ibc_cashflow_out_pending' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ZonePeersShortInfoV2Fragment, unknown>;
