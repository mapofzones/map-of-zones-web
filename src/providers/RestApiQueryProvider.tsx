import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

const defaultQueryFn = async ({ queryKey }: { queryKey: any }) => {
  const { data } = await axios.get(
    `https://calc-api-n9ypi.ondigitalocean.app/api/beta/${queryKey[0]}`
  );
  return data;
};

// provide the default query function to your app with defaultOptions
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

export function RestApiQueryProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
