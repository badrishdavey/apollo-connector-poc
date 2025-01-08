import { RESTDataSource } from '@apollo/datasource-rest';

export class CustomerDataSource extends RESTDataSource {
  constructor() {
    super();
    // Simulated data store
    this.customers = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
      },
    ];
  }

  async getCustomer(id) {
    return this.customers.find(c => c.id === id);
  }
}
