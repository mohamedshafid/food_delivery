import express from "express";
import { userRegister,userLogin } from "../controller/userController.js";
const userRoute = express.Router();

userRoute.post('/register', userRegister);
userRoute.post('/login', userLogin);

export default userRoute;