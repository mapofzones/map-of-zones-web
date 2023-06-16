import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import {
  ZoneOverviewReturnedAddressesDocument,
  ZoneOverviewReturnedAddressesQueryResult,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewReturnedAddresses.generated';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

import { ZoneOverviewReturnedAddressesData } from './types';

// TODO: move to new file
export function calculateReturnedRate(
  repeatableAddresses: number | undefined,
  previousActiveAddresees: number | undefined
) {
  if (previousActiveAddresees === undefined || repeatableAddresses === undefined) {
    return undefined;
  }

  return repeatableAddresses / previousActiveAddresees;
}

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

  const cardData = nullsToUndefined(data?.cardData);

  return {
    data: {
      returnedRate: calculateReturnedRate(
        cardData?.repeatableAddresses,
        cardData?.previousActiveAddresees
      ),
      returnedAddresses: cardData?.repeatableAddresses,
      prevTotalAddresses: cardData?.previousActiveAddresees,
      ibcReturnedRate: calculateReturnedRate(
        cardData?.ibcRepeatableAddresses,
        cardData?.ibcPreviousActiveAddresees
      ),
      ibcReturnedAddresses: cardData?.ibcRepeatableAddresses,
      ibcPrevTotalAddresses: cardData?.ibcPreviousActiveAddresees,
    },
    loading,
  };
}
