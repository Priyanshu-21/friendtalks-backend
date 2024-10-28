import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
dotenv.config({ path: "../.env" });

const app = express();

//Connection to Database
(async function dbConnect() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    //DB is connected but Express is failing
    app.on("error", function (error) {
      console.error("Error: ", error);
      throw error;
    });

    //DB & Express both connection is working fine
    app.listen(() => {
      console.log(`App is listening on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
