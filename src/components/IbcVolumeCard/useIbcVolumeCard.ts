import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZoneIbcVolumeCardDocument } from 'graphql/v2/common/Cards/__generated__/ZoneIbcVolumeCard.query.generated';
import { useMainnet } from 'hooks/useMainnet';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { handleChartByPeriod } from 'utils/ handleChartByPeriod';
import { ChartItemByString } from 'utils/helper';

export interface IbcVolumeCardData {
  ibcVolume?: number;
  ibcVolumeIn?: number;
  ibcVolumeOut?: number;
  ibcVolumeInPercent?: number;
  ibcVolumeOutPercent?: number;
  ibcVolumeInPending?: number;
  ibcVolumeOutPending?: number;
  ibcVolumeChart: ChartItemByString[];
}

export function useIbcVolumeCard(): {
  data: IbcVolumeCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const [period] = useSelectedPeriod();

  const [isMainnet] = useMainnet();

  const options = {
    variables: {
      zone,
      period: PERIODS_IN_HOURS_BY_KEY[period],
      isMainnet,
    },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZoneIbcVolumeCardDocument, options);

  return {
    data: {
      ...data?.ibcVolumeCardData[0],
      ibcVolumeChart: handleChartByPeriod(
        data?.ibcVolumeCardData[0]?.ibcVolumeChart?.slice(),
        period,
        'volume'
      ),
    },
    loading,
  };
}
