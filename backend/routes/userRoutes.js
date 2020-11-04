import express from 'express'
import { authUser } from '../controllers/userControllers.js'

const userRouter = express.Router()

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public
userRouter.route('/login').post(authUser)

export default userRouter
