import { gql, useQuery } from '@apollo/client';
import { useEffect, useMemo, useState } from 'react';
import { ZoneInfoRow } from '../index';
import styles from './ZonesInfoTable.module.scss';

const fieldsMap: {
  [key: string]: any;
} = {
  IBC_VOLUME: {
    value: 'ibcVolume',
    pendingValue: 'ibcVolumePending',
  },
  IBC_TRANSFERS: {
    value: 'ibcTransfers',
    pendingValue: 'ibcTransfersPending',
  },
};

function ZonesInfoTable({ data, columnType, numberType }: any) {
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
            numberType={numberType}
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
