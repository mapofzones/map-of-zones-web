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
    ibc_tx_7d
    ibc_tx_7d_diff
    ibc_tx_7d_failed
    ibc_tx_30d
    ibc_tx_30d_diff
    ibc_tx_30d_failed
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
      ibc_tx_7d,
      ibc_tx_7d_diff,
      ibc_tx_7d_failed,
      ibc_tx_30d,
      ibc_tx_30d_diff,
      ibc_tx_30d_failed,
    }) => {
      return {
        id: zone,
        name: zone,
        client_id,
        connection_id,
        channel_id,
        zone_counerparty,
        is_opened,
        ibc_tx_1d,
        ibc_tx_1d_diff,
        ibc_tx_1d_failed,
        ibc_tx_7d,
        ibc_tx_7d_diff,
        ibc_tx_7d_failed,
        ibc_tx_30d,
        ibc_tx_30d_diff,
        ibc_tx_30d_failed,
      };
    },
  );

  const selectedNodes = zonesFormatted.filter(({ zone_counerparty }) =>
    options.additionalData.targets.find(target => target === zone_counerparty),
  );

  return {
    nodes: zonesFormatted,
    selectedNodes,
  };
};

export const useZoneStat = options => {
  const channels = useRealtimeQuery(
    SOURCE_STAT_QUERY,
    SOURCE_STAT_SUBSCRIPTION,
    options,
  );

  return useMemo(() => transform(channels?.channels_stats, options), [
    channels,
    options,
  ]);
};
