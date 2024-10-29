import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
dotenv.config({ path: "../.env" });

async function dbConnect() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    //MONGODB is connected to Port
    console.log(
      `MongoDB is connected to ${connectionInstance.connection.port} port`
    );
  } catch (error) {
    //DB connection is failing
    console.error("MONGODB connection ERROR: ", error);
    throw error;
  }
}

export default dbConnect;
