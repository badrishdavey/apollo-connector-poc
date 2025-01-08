import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { TransactionDataSource } from './datasources/transactions.js';
import { CustomerDataSource } from './datasources/customers.js';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        transactions: new TransactionDataSource(),
        customers: new CustomerDataSource(),
      },
    };
  },
});

console.log(`🚀 Data Product Server ready at ${url}`);
