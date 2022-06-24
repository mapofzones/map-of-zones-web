import { gql, useQuery } from '@apollo/client';
import { useEffect, useMemo, useState } from 'react';
import { ZoneInfoRow } from '../index';
import styles from './ZonesInfoTable.module.scss';

const ZONES_INFO_BY_VOLUME = gql`
  query GetZonesInfo($period: Int!, $isMainnet: Boolean!, $isVolume: Boolean!) {
    zonesInfo: zones_stats(
      where: { timeframe: { _eq: $period }, is_zone_mainnet: { _eq: $isMainnet } }
    ) {
      id: zone
      zoneLabelUrl: zone_label_url
      name: zone_readable_name
      ibcVolume: ibc_cashflow @include(if: $isVolume)
      ibcVolumePending: ibc_cashflow_pending @include(if: $isVolume)
      ibcVolumeRating: ibc_cashflow_rating @include(if: $isVolume)
      ibcVolumeRatingDiff: ibc_cashflow_rating_diff @include(if: $isVolume)
      ibcTransfers: ibc_transfers @skip(if: $isVolume)
      ibcTransfersPending: ibc_transfers_pending @skip(if: $isVolume)
      ibcTransfersRating: ibc_transfers_rating @skip(if: $isVolume)
      ibcTransfersRatingDiff: ibc_transfers_rating_diff @skip(if: $isVolume)
    }
  }
`;

export const INFO_WITH_VOLUME = gql`
  fragment InfoWithVolume on zones_stats {
    id: zone
    zoneLabelUrl: zone_label_url
    name: zone_readable_name
    ibcVolume: ibc_cashflow
    ibcVolumePending: ibc_cashflow_pending
    ibcVolumeRating: ibc_cashflow_rating
    ibcVolumeRatingDiff: ibc_cashflow_rating_diff
  }
`;

export const INFO_WITH_TRANSFERS = gql`
  fragment InfoWithTransfers on zones_stats {
    id: zone
    zoneLabelUrl: zone_label_url
    name: zone_readable_name
    ibcTransfers: ibc_transfers
    ibcTransfersPending: ibc_transfers_pending
    ibcTransfersRating: ibc_transfers_rating
    ibcTransfersRatingDiff: ibc_transfers_rating_diff
  }
`;

const fieldsMap: {
  [key: string]: any;
} = {
  volume: {
    value: 'ibcVolume',
    pendingValue: 'ibcVolumePending',
  },
  transfers: {
    value: 'ibcTransfers',
    pendingValue: 'ibcTransfersPending',
  },
};

function ZonesInfoTable({ data, columnType }: any) {
  console.log('ZonesInfoTable', columnType);
  // const [zonseInfo, setZonesInfo] = useState([]);
  // const { loading, error, data } = useQuery(ZONES_INFO_BY_VOLUME, {
  //   variables: { period: 24, isMainnet: true, isVolume: columnType === 'volume' },
  // });
  // useEffect(() => {
  //   const query = columnType === 'volume' ? ZONES_INFO_BY_VOLUME : ZONES_INFO_BY_TRANSFERS;
  //   const { loading, error, data } = useQuery(query, {
  //     variables: { period: 24, isMainnet: true },
  //   });
  //   console.log(data);
  //   setZonesInfo(data.zonesInfo);
  // }, [columnType]);
  const fields = useMemo(() => fieldsMap[columnType], [columnType]);
  console.log(fields);

  return (
    <div className={styles.zonesInfoTable}>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error...</p>} */}
      {data &&
        data.zonesInfo &&
        data.zonesInfo.map((info: any) => (
          <ZoneInfoRow
            key={info.id}
            data={{
              name: info.name,
              value: info[fields.value],
              pendingValue: info[fields.pendingValue],
            }}
          />
        ))}
    </div>
  );
}

export { ZonesInfoTable };
