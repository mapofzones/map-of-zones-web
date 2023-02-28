import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import {
  ZoneOverviewReturnedAddressesDocument,
  ZoneOverviewReturnedAddressesQueryResult,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewReturnedAddresses.generated';

export function useZoneOverviewReturnedAddresses(): {
  data: { returnedRate?: number; returnedAddresses?: number };
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const options = {
    variables: {
      zone,
      isMainnet: true,
    },
    skip: !zone,
  };

  const { data, loading } = useQuery<ZoneOverviewReturnedAddressesQueryResult>(
    ZoneOverviewReturnedAddressesDocument,
    options
  );

  return {
    data: {
      returnedRate: calculateReturnedRate(data),
      returnedAddresses: data?.cardData?.repeatableAddresses ?? undefined,
    },
    loading,
  };
}

function calculateReturnedRate(data: ZoneOverviewReturnedAddressesQueryResult | undefined) {
  if (!data?.cardData?.previousActiveAddresees || !data?.cardData?.repeatableAddresses) {
    return undefined;
  }
  return data.cardData.repeatableAddresses / data.cardData.previousActiveAddresees;
}
