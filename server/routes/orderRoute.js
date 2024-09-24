import express from "express";
import { orderFood } from "../controller/orderController.js";

const orderRoute = express.Router();


orderRoute.post('/order', orderFood);

export default orderRoute;
