import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('server listening on port: ', PORT)
  console.log('mode ', process.env.NODE_ENV)
})
