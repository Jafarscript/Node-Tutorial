import express from 'express'
import { getUserHome, getUserProfile } from '../controllers/userController';

const userRouter = express.Router()

userRouter.get("/", getUserHome)

userRouter.get("/profile", getUserProfile);

export default userRouter;