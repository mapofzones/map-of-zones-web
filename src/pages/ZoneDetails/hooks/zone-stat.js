import { useMemo } from 'react';
import gql from 'graphql-tag';

import { useRealtimeQuery } from 'common/hooks';

const SOURCE_STAT_FRAGMENT = gql`
  fragment stat on channels_stats {
    zone
    client_id
    connection_id
    channel_id
    zone_counerparty
    is_opened
    ibc_tx_1d
    ibc_tx_1d_diff
    ibc_tx_1d_failed
    ibc_tx_1d_failed_diff
    ibc_tx_7d
    ibc_tx_7d_diff
    ibc_tx_7d_failed
    ibc_tx_7d_failed_diff
    ibc_tx_30d
    ibc_tx_30d_diff
    ibc_tx_30d_failed
    ibc_tx_30d_failed_diff
    zone_readable_name
    zone_counterparty_label_url
    zone_label_url2
    zone_counterparty_label_url2
  }
`;

const SOURCE_STAT_QUERY = gql`
  query SourceStat($source: String!) {
    channels_stats(where: { zone: { _eq: $source } }) {
      ...stat
    }
  }
  ${SOURCE_STAT_FRAGMENT}
`;

const SOURCE_STAT_SUBSCRIPTION = gql`
  subscription SourceStat($source: String!) {
    channels_stats(where: { zone: { _eq: $source } }) {
      ...stat
    }
  }
  ${SOURCE_STAT_FRAGMENT}
`;

const SOURCE_STAT_QUERY_ONLY_MAINNET = gql`
  query SourceStat($source: String!) {
    channels_stats(
      where: {
        zone: { _eq: $source }
        is_zone_counerparty_mainnet: { _eq: true }
      }
    ) {
      ...stat
    }
  }
  ${SOURCE_STAT_FRAGMENT}
`;

const SOURCE_STAT_SUBSCRIPTION_ONLY_MAINNET = gql`
  subscription SourceStat($source: String!) {
    channels_stats(
      where: {
        zone: { _eq: $source }
        is_zone_counerparty_mainnet: { _eq: true }
      }
    ) {
      ...stat
    }
  }
  ${SOURCE_STAT_FRAGMENT}
`;

const transform = (channels, options) => {
  if (!channels) {
    return null;
  }

  const zonesFormatted = channels.map(
    ({
      zone,
      client_id,
      connection_id,
      channel_id,
      zone_counerparty,
      is_opened,
      ibc_tx_1d,
      ibc_tx_1d_diff,
      ibc_tx_1d_failed,
      ibc_tx_1d_failed_diff,
      ibc_tx_7d,
      ibc_tx_7d_diff,
      ibc_tx_7d_failed,
      ibc_tx_7d_failed_diff,
      ibc_tx_30d,
      ibc_tx_30d_diff,
      ibc_tx_30d_failed,
      ibc_tx_30d_failed_diff,
      zone_readable_name,
      zone_counterparty_label_url,
      zone_label_url2,
      zone_counterparty_label_url2,
    }) => {
      return {
        id: zone,
        name: zone_readable_name,
        client_id,
        connection_id,
        channel_id,
        zone_counerparty,
        is_opened,
        ibc_tx_1d,
        ibc_tx_1d_diff,
        ibc_tx_1d_failed,
        ibc_tx_1d_failed_diff,
        ibc_tx_7d,
        ibc_tx_7d_diff,
        ibc_tx_7d_failed,
        ibc_tx_7d_failed_diff,
        ibc_tx_30d,
        ibc_tx_30d_diff,
        ibc_tx_30d_failed,
        ibc_tx_30d_failed_diff,
        zone_counterparty_label_url,
        zone_label_url2,
        zone_counterparty_label_url2,
      };
    },
  );

  let selectedNodes = zonesFormatted;

  if (options.additionalData.targets?.length) {
    selectedNodes = zonesFormatted.filter(({ zone_counerparty }) =>
      options.additionalData.targets.find(
        target => target === zone_counerparty,
      ),
    );
  }

  return {
    nodes: zonesFormatted,
    selectedNodes,
  };
};

export const useZoneStat = (options, isTestnetVisible) => {
  const channels = useRealtimeQuery(
    SOURCE_STAT_QUERY,
    SOURCE_STAT_SUBSCRIPTION,
    options,
  );

  const mainnetChannels = useRealtimeQuery(
    SOURCE_STAT_QUERY_ONLY_MAINNET,
    SOURCE_STAT_SUBSCRIPTION_ONLY_MAINNET,
    options,
  );

  return useMemo(
    () =>
      transform(
        isTestnetVisible
          ? channels?.channels_stats
          : mainnetChannels?.channels_stats,
        options,
      ),
    [channels, isTestnetVisible, mainnetChannels, options],
  );
};
