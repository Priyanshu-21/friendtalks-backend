import dotenv from "dotenv";
import dbConnect from "./db/dbConnect.js";
import app from "./app.js";
dotenv.config({ path: "./env" });

// connection to Database will return promisified values
// First connnection to Db then connection to servers
dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running on Port: ${process.env.PORT}`);
    });

    //when Server connection is failing then
    app.on("error", (error) => {
      console.error("Server failed to connect: ", error);
      throw error; 
    });
  })
  .catch((error) => {
    console.error("MONGODB connection failed: ", error);
  });
