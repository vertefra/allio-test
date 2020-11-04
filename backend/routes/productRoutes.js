import express from 'express'
import {
  getProducts,
  getProductById,
} from '../controllers/productControllers.js'

const productRouter = express.Router()

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
productRouter.route('/').get(getProducts)

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
productRouter.route('/:id').get(getProductById)

export default productRouter
