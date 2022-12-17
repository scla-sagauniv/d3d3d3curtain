import {ApolloServer} from 'apollo-server-azure-functions';
import {typeDefs, resolvers} from './interface/graphql/schema';

// GraphQL サーバーを起動する
const server = new ApolloServer({typeDefs, resolvers, debug: true});

export default server.createHandler({
  cors: {
    origin: ['*', 'https://studio.apollographql.com'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: [
      'access-control-allow-credentials',
      'access-control-allow-origin',
      'content-type',
    ],
  },
});
