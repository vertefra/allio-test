import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userControllers.js'
import protect from '../middleware/authMiddleware.js'
const userRouter = express.Router()

userRouter.route('/').post(registerUser)
userRouter.route('/login').post(authUser)
userRouter
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
userRouter.route('/register').post(registerUser)

export default userRouter
