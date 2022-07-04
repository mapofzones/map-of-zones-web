import {
  createSearchParams,
  Navigate,
  URLSearchParamsInit,
  useSearchParams,
} from 'react-router-dom';

import { PeriodKeys } from 'pages/HomePage/Sidebar/ZonesInfo/Types';
import { ColumnKeys } from 'pages/HomePage/Types';

const periodMapping: Record<string, string> = {
  '24': '24h',
  '168': '7d',
  '720': '30d',
};

// redirect from ?testnet=true&period=168&tableOrderBy=totalTxs&tableOrderSort=desc&zone=columbus-5
function RedirectFromOldVersionToHomePage(): JSX.Element {
  const [searchParams] = useSearchParams();
  const zone = searchParams.get('zone');
  const period = searchParams.get('period');
  const tableOrder = searchParams.get('tableOrderBy');

  const newSearchParams = createSearchParams({
    columnKey: tableOrder?.toString() ?? ColumnKeys.IbcVolume,
    period: period && periodMapping[period] ? periodMapping[period] : PeriodKeys.DAY,
  } as URLSearchParamsInit);
  const newSearchParamsStr = newSearchParams.toString();

  if (zone) {
    return <Navigate to={`home/${zone}/overview?${newSearchParamsStr}`} />;
  }
  return <Navigate to={`home?${newSearchParamsStr}`} />;
}

export { RedirectFromOldVersionToHomePage };
