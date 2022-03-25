import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// TODO: add zone_website
const ZONE_DETAILS = gql`
  query ZoneDetails($source: String!) {
    zones_stats(limit: 1, where: { zone: { _eq: $source } }) {
      zone
      website
      zone_readable_name
      zone_label_url
    }
  }
`;

export const useZoneDetails = source => {
  const options = useMemo(() => ({ variables: { source } }), [source]);
  const { data } = useQuery(ZONE_DETAILS, options);

  return useMemo(() => {
    const zoneDetails = data?.zones_stats[0];
    return zoneDetails
      ? {
          website: zoneDetails.website,
          name: zoneDetails.zone_readable_name,
          labelUrl: zoneDetails.zone_label_url,
        }
      : null;
  }, [data]);
};
