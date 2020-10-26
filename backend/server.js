import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.get('/api/products', (req, res) => {
  console.log('Products')
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  console.log(product)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('server listening on port: ', PORT)
  console.log('mode ', process.env.NODE_ENV)
})
