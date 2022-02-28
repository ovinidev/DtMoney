import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer, Model } from 'miragejs'
import { TransactionsProvider } from './contexts/TransactionsContext'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 11:00:00'),
        },
        {
          id: 2,
          title: 'Freelance de website',
          type: 'withdraw',
          category: 'Dev',
          amount: -2000,
          createdAt: new Date('2021-02-12 11:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
