import { ReactNode } from 'react';

import { ApolloClient, HttpLink, InMemoryCache, gql, makeVar } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react/context/ApolloProvider';

const link = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_HTTP_URI });

const typeDefs = gql`
  extend type ZoneCustomizedLocal {
    isIbcVolumeShouldBeCustomized: Boolean!
  }
`;

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      flat_blockchains: {
        fields: {
          isIbcVolumeShouldBeCustomized: {
            read(_, { readField }) {
              const zone = readField('network_id') as string;
              return zonesWithCustomIbcVolumeVar().includes(zone);
            },
          },
        },
      },
    },
  }),
  link: link,
  typeDefs,
});

export function GraphQLProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export const zonesWithCustomIbcVolumeVar = makeVar(['gravity-bridge-3']);
