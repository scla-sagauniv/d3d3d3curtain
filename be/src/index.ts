import {ApolloServer} from 'apollo-server';
import {typeDefs, resolvers} from './interface/graphql/schema';

// GraphQL サーバーを起動する
const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
