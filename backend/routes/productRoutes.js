import express from 'express'
import { getProducts, getProductById } from '../controllers/productControllers'

const productRouter = express.Router()

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
productRouter.route('/').get(getProducts)

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
productRouter.route('/:id').get(getProductById)

productRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {})
)

// NOTE: asyncHandler catches all the error between the req and response
// working as a try-catch

export default productRouter
