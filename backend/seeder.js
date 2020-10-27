import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from './data/users.js'
import products from './data/products.js'

import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    // adding admin id to all the products in the database
    const sampleProduct = products.map(p => {
      return { ...p, user: adminUser }
    })

    await Product.insertMany(sampleProduct)

    console.log('Database seeded '.green.inverse)
    process.exit()
  } catch (err) {
    console.log(`${err}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('All the data has been deleted'.red.inverse)
    process.exit()
  } catch (err) {
    console.log(`${err}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else if (process.argv[2] === '-i') {
  importData()
} else {
  console.log('Options:')
  console.log('-i => import data '.green)
  console.log('-d => destroy data'.green)
  console.log(`${process.argv[2]} not recognized`.yellow)
}
