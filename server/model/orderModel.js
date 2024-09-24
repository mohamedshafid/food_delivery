import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
});

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
