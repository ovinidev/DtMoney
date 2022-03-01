import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer, Model } from 'miragejs'
import { TransactionsProvider } from './hooks/useTransactions'
import { ThemeProvider } from './hooks/useTheme'

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
          category: 'Front End',
          amount: 6000,
          createdAt: new Date('2021-02-12 11:00:00'),
        },
        {
          id: 2,
          title: 'Produção de conteúdo',
          type: 'withdraw',
          category: 'Desenvolvimento',
          amount: 2000,
          createdAt: new Date('2021-02-12 11:00:00'),
        },
        {
          id: 3,
          title: 'Produção de conteúdo',
          type: 'withdraw',
          category: 'Desenvolvimento',
          amount: 1500,
          createdAt: new Date('2021-02-12 11:00:00'),
        },
        {
          id: 4,
          title: 'Produção de conteúdo',
          type: 'withdraw',
          category: 'Desenvolvimento',
          amount: -500,
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
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
