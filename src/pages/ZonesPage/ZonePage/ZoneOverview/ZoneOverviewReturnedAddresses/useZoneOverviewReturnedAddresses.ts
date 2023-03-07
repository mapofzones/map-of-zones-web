import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import {
  ZoneOverviewReturnedAddressesDocument,
  ZoneOverviewReturnedAddressesQueryResult,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewReturnedAddresses.generated';

import { ZoneOverviewReturnedAddressesData } from './types';

export function useZoneOverviewReturnedAddresses(period: PeriodKeys): {
  data: ZoneOverviewReturnedAddressesData;
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

  return {
    data: {
      returnedRate: calculateReturnedRate(
        data?.cardData?.repeatableAddresses ?? undefined,
        data?.cardData?.previousActiveAddresees ?? undefined
      ),
      returnedAddresses: data?.cardData?.repeatableAddresses ?? undefined,
      prevTotalAddresses: data?.cardData?.previousActiveAddresees ?? undefined,
      ibcReturnedRate: calculateReturnedRate(
        data?.cardData?.ibcRepeatableAddresses ?? undefined,
        data?.cardData?.ibcPreviousActiveAddresees ?? undefined
      ),
      ibcReturnedAddresses: data?.cardData?.ibcRepeatableAddresses ?? undefined,
      ibcPrevTotalAddresses: data?.cardData?.ibcPreviousActiveAddresees ?? undefined,
    },
    loading,
  };
}

function calculateReturnedRate(
  repeatableAddresses: number | undefined,
  previousActiveAddresees: number | undefined
) {
  if (previousActiveAddresees === undefined || repeatableAddresses === undefined) {
    return undefined;
  }
  console.log(
    repeatableAddresses,
    previousActiveAddresees,
    repeatableAddresses / previousActiveAddresees
  );
  return repeatableAddresses / previousActiveAddresees;
}
