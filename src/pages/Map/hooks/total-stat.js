import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const TOTAL_STAT = gql`
  query TotalStat($period: Int!, $step: Int!) {
    get_total_stats(args: { period_in_hours: $period, step_in_hours: $step }) {
      zones_cnt_period
      zones_cnt_all
      top_zone_pair
      channels_cnt_period
      channels_cnt_all
      chart
    }
  }
`;

// TODO
const transform = data => {
  if (!data) {
    return data;
  }

  return data.get_total_stats[0];
};

export const useTotalStat = options => {
  const { data, ...rest } = useQuery(TOTAL_STAT, options);

  return { ...rest, data: transform(data) };
};
