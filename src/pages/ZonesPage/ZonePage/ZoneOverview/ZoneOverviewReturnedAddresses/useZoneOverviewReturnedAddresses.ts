import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import {
  ZoneOverviewReturnedAddressesDocument,
  ZoneOverviewReturnedAddressesQueryResult,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewReturnedAddresses.generated';
import { ZoneAnalysisReturnedAddressesData } from 'types/models/Analysis/ZoneAnalysisReturnedAddressesData';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

export function useZoneOverviewReturnedAddresses(period: PeriodKeys): {
  data: ZoneAnalysisReturnedAddressesData;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const options = {
    variables: {
      zone,
      period: PERIODS_IN_HOURS_BY_KEY[period],
    },
    skip: !zone,
  };

  const { data, loading } = useQuery<ZoneOverviewReturnedAddressesQueryResult>(
    ZoneOverviewReturnedAddressesDocument,
    options
  );

  const cardData = nullsToUndefined(data?.cardData);

  return {
    data: {
      returnedRate: cardData?.returnedRate,
      returnedAddresses: cardData?.repeatableAddresses,
      prevTotalAddresses: cardData?.previousActiveAddresees,
      ibcReturnedRate: cardData?.ibcReturnedRate,
      ibcReturnedAddresses: cardData?.ibcRepeatableAddresses,
      ibcPrevTotalAddresses: cardData?.ibcPreviousActiveAddresees,
    },
    loading,
  };
}
