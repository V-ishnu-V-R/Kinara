import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import studentRoute from "./routes/studentRoute.js";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//Connection to mongoDB (Database on mongoDB Atlas cloud)
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening on ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

//Mounting routes (student route here)
app.use("/student", studentRoute);
