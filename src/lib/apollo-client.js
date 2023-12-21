import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL,
  cache: new InMemoryCache()
});