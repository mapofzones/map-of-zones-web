import { ReactNode } from 'react';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react/context/ApolloProvider';

const link = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_HTTP_URI });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export function GraphQLProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
