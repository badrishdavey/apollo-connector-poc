export const resolvers = {
  Query: {
    transaction: (_, { id }, { dataSources }) => {
      return dataSources.transactions.getTransaction(id);
    },
    transactions: (_, { customerId }, { dataSources }) => {
      return dataSources.transactions.getTransactions(customerId);
    },
    customer: (_, { id }, { dataSources }) => {
      return dataSources.customers.getCustomer(id);
    },
  },
  Transaction: {
    customer: (parent, _, { dataSources }) => {
      return dataSources.customers.getCustomer(parent.customerId);
    },
  },
  Customer: {
    transactions: (parent, _, { dataSources }) => {
      return dataSources.transactions.getTransactions(parent.id);
    },
  },
};

