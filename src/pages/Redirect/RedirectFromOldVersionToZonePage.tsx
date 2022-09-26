import {
  createSearchParams,
  Navigate,
  URLSearchParamsInit,
  useSearchParams,
} from 'react-router-dom';

import { PeriodKeys } from 'components';
import { ColumnKeys as ZoneColumnKeys } from 'pages/ZonesPage/ZonePage/ZonePeers/Types';
import { ColumnKeys as ZonesColumnKeys } from 'pages/ZonesPage/ZonesInfo/ZonesTable/Types';

import { periodMapping } from './mappings';

const zoneSortingMapping: Record<string, ZoneColumnKeys> = {
  volume_in: ZoneColumnKeys.IbcVolumeReceived,
  volume_out: ZoneColumnKeys.IbcVolumeSent,
  ibc_tx_success: ZoneColumnKeys.IbcTransfers,
  ibc_tx_pending: ZoneColumnKeys.IbcTransfersPending,
  ibc_tx_failed: ZoneColumnKeys.IbcTransfersFailed,
  success_rate: ZoneColumnKeys.SuccessRate,
};

const zonesSortingMapping: Record<string, ZonesColumnKeys> = {
  volume_in: ZonesColumnKeys.IbcVolumeReceived,
  volume_out: ZonesColumnKeys.IbcVolumeSent,
  ibc_tx_success: ZonesColumnKeys.IbcTransfers,
  ibc_tx_pending: ZonesColumnKeys.IbcTransfers,
  ibc_tx_failed: ZonesColumnKeys.IbcTransfers,
  success_rate: ZonesColumnKeys.IbcTransfers,
};

export function RedirectFromOldVersionToZonePage(): JSX.Element {
  const [searchParams] = useSearchParams();
  const source = searchParams.get('source');
  const periodParam = searchParams.get('period');
  const tableOrder = searchParams.get('tableOrderBy');

  const period =
    periodParam && periodMapping[periodParam] ? periodMapping[periodParam] : PeriodKeys.DAY;

  if (source) {
    const newSearchParams = createSearchParams({
      columnKey:
        (tableOrder && zoneSortingMapping[tableOrder.toString()]) ?? ZoneColumnKeys.IbcVolumeTotal,
      period,
    } as URLSearchParamsInit);

    return <Navigate to={`/zones/${source}/peers?${newSearchParams.toString()}`} />;
  }
  const newSearchParams = createSearchParams({
    columnKey:
      (tableOrder && zonesSortingMapping[tableOrder.toString()]) ?? ZonesColumnKeys.IbcVolume,
    period,
  } as URLSearchParamsInit);
  return <Navigate to={`/zones?${newSearchParams.toString()}`} />;
}
