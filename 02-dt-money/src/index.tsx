import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Compra de notebook',
          value: 5000,
          type: 'expense',
          category: 'Compra de equipamento',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Criação de e-commerce',
          value: 20000,
          type: 'gain',
          category: 'Prestação de serviço',
          createdAt: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      data.createdAt = new Date()

      return schema.create('transaction', data) 
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);