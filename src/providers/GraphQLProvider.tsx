import { ReactNode } from 'react';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react/context/ApolloProvider';

import { calculateReturnedRate } from 'utils/calculateReturnedRate';

const link = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_HTTP_URI });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  resolvers: {
    flat_blockchain_stats: {
      returnedRate: (item) => {
        if (item.returnedRate) {
          return item.returnedRate;
        }
        const repeatableAddresses = item.repeatableAddresses;
        const previousActiveAddresses = item.previousActiveAddresees;
        return calculateReturnedRate(repeatableAddresses, previousActiveAddresses);
      },
      ibcReturnedRate: (item) => {
        if (item.ibcReturnedRate) {
          return item.ibcReturnedRate;
        }
        const repeatableAddresses = item.ibcRepeatableAddresses;
        const previousActiveAddresses = item.ibcPreviousActiveAddresees;
        return calculateReturnedRate(repeatableAddresses, previousActiveAddresses);
      },
    },
  },
});

export function GraphQLProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
