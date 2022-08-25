import { useQuery } from '@apollo/client';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import { TotalZonesInfoDocument } from 'graphql/HomePage/__generated__/TotalZonesInfo.query.generated';
import { ColumnKeys } from 'pages/HomePage/Types';
import { transformChartData } from 'utils/helper';

import { TotalInfoType } from './TotalInfoCard/TotalInfoCard.props';

const IBC_VOLUME_CHART_KEY = 'ibcVolumeChart';

export function useTotalZonesInfo(
  selectedPeriod: PeriodKeys,
  selectedColumnKey: ColumnKeys,
  isMainnet = true
) {
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: isMainnet,
      withVolume: selectedColumnKey === ColumnKeys.IbcVolume,
      withTransfers: selectedColumnKey === ColumnKeys.IbcTransfers,
    },
  };

  const { data, loading } = useQuery(TotalZonesInfoDocument, options);

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
