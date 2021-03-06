import express from 'express'
import { addOrderItems } from '../controllers/orderControllers.js'
import protect from '../middleware/authMiddleware.js'
const orderRouter = express.Router()

orderRouter.route('/').post(protect, addOrderItems)

export default orderRouter
