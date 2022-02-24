import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('transactions', () => {
      return [
        { id: 1, name: "Inception", year: 2010 },
        { id: 2, name: "Interstellar", year: 2014 },
        { id: 3, name: "Dunkirk", year: 2017 },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
