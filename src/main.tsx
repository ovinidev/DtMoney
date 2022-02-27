import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer } from 'miragejs'
import { TransactionsContextProvider } from './contexts/TransactionsContext'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('transactions', () => {
      return [
        {
          id: 1,
          title: "Desenvolvimento no site",
          amount: 12000,
          type: 'deposit',
          category: 'React',
          createdAt: new Date()
        },
        {
          id: 2,
          title: "Criando aplicação",
          amount: -59,
          type: 'withdraw',
          category: 'Css',
          createdAt: new Date()
        },
        {
          id: 3,
          title: "Submissão de artigo",
          amount: -1200,
          type: 'withdraw',
          category: 'Dev',
          createdAt: new Date()
        },
        {
          id: 4,
          title: "Submissão de artigo",
          amount: 5400,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date()
        },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <TransactionsContextProvider>
      <App />
    </TransactionsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
