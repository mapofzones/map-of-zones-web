import {
  createSearchParams,
  Navigate,
  URLSearchParamsInit,
  useSearchParams,
} from 'react-router-dom';

import { PeriodKeys } from 'components';
import { ColumnKeys } from 'pages/HomePage/Types';

import { periodMapping } from './mappings';

const sortingMapping: Record<string, ColumnKeys> = {
  ibcVolume: ColumnKeys.IbcVolume,
  totalTxs: ColumnKeys.TotalTxs,
  ibcTransfers: ColumnKeys.IbcTransfers,
  ibcActiveAddresses: ColumnKeys.Dau,
};

// redirect from ?testnet=true&period=168&tableOrderBy=totalTxs&tableOrderSort=desc&zone=columbus-5
export function RedirectFromOldVersionToHomePage(): JSX.Element {
  const [searchParams] = useSearchParams();
  const zone = searchParams.get('zone');
  const period = searchParams.get('period');
  const tableOrder = searchParams.get('tableOrderBy');

  const newSearchParams = createSearchParams({
    columnKey: (tableOrder && sortingMapping[tableOrder.toString()]) ?? ColumnKeys.IbcVolume,
    period: period && periodMapping[period] ? periodMapping[period] : PeriodKeys.DAY,
  } as URLSearchParamsInit);
  const newSearchParamsStr = newSearchParams.toString();

  if (zone) {
    return <Navigate to={`home/${zone}/overview?${newSearchParamsStr}`} />;
  }
  return <Navigate to={`home?${newSearchParamsStr}`} />;
}
