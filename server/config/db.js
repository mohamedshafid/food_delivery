import mongoose from "mongoose";

export const connectionDB = async () => {
  (await mongoose.connect("mongodb+srv://mohamedhafid010:mohamed.swiggy@cluster0.iivocpa.mongodb.net/swiggy-food")
  .then(()=>console.log("db is connected")));
}