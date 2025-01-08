import { RESTDataSource } from '@apollo/datasource-rest';

export class TransactionDataSource extends RESTDataSource {
  constructor() {
    super();
    // Simulated data store
    this.transactions = [
      {
        id: '1',
        amount: 299.99,
        merchantName: 'Apple Store',
        timestamp: new Date().toISOString(),
        customerId: '1',
        quality: {
          completeness: 0.98,
          accuracy: 0.99,
          lastUpdated: new Date().toISOString(),
        },
      },
      {
        id: '2',
        amount: 55.50,
        merchantName: 'Amazon',
        timestamp: new Date().toISOString(),
        customerId: '1',
        quality: {
          completeness: 0.95,
          accuracy: 0.98,
          lastUpdated: new Date().toISOString(),
        },
      },
    ];
  }

  async getTransaction(id) {
    return this.transactions.find(t => t.id === id);
  }

  async getTransactions(customerId) {
    if (customerId) {
      return this.transactions.filter(t => t.customerId === customerId);
    }
    return this.transactions;
  }
}
