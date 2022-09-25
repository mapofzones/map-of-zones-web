import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ColumnKeys } from 'pages/HomePage/Types';
import { transformChartData } from 'utils/helper';

import { TotalInfoType } from './TotalInfoCard/TotalInfoCard.props';

const IBC_VOLUME_CHART_KEY = 'ibcVolumeChart';

export function useTotalZonesInfo(
  selectedPeriod: PeriodKeys,
  selectedColumnKey: ColumnKeys,
  skip = false
) {
  const [isMainnet] = [true]; // TODO: use custom hook

  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: isMainnet,
      withVolume: selectedColumnKey === ColumnKeys.IbcVolume,
      withTransfers: selectedColumnKey === ColumnKeys.IbcTransfers,
    },
    skip,
  };

  // const { data, loading } = useQuery(TotalZonesInfoDocument, options);
  const data = {
    headers: [{ ibcVolumeChart: [] }],
  };
  const loading = true;

  return {
    data: {
      ...data?.headers[0],
      [IBC_VOLUME_CHART_KEY]: transformChartData(
        data?.headers[0][IBC_VOLUME_CHART_KEY],
        IBC_VOLUME_CHART_KEY
      ),
    } as TotalInfoType,
    loading,
  };
}
