import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";
import { connectionDB } from "./config/db.js";
import orderRoute from "./routes/orderRoute.js";
import "dotenv/config";


//creating the app
const app = express();
const port = 8000;


//invoking the database connection
connectionDB();

//middlwares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static('uploads'));


//api redirecting
app.use('/user', userRoute);
app.use('/orders', orderRoute);


//creating the no router enpoint
app.get('/', (req, res) => {
  res.send('The server is started and running on the port');
});


//creating the server
app.listen(port, () => {
  console.log("server is created successfully");
})