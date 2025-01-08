export const typeDefs = `#graphql
  type Transaction {
    id: ID!
    amount: Float!
    merchantName: String!
    timestamp: String!
    customerId: ID!
    customer: Customer
    quality: DataQuality!
  }

  type Customer {
    id: ID!
    name: String!
    email: String!
    transactions: [Transaction!]
  }

  type DataQuality {
    completeness: Float!
    accuracy: Float!
    lastUpdated: String!
  }

  type Query {
    transaction(id: ID!): Transaction
    transactions(customerId: ID): [Transaction!]
    customer(id: ID!): Customer
  }
`;
