import asyncHandler from 'express-async-handler'
import Product from '../models/productModel'


// NOTE: asyncHandler catches all the error between the req and response
// working as a try-catch


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler( (req, res) => {
    const products = await Product.find({})
    res.json({ products: [...products] })
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = asyncHandler( (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
})