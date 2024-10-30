import express from "express"; 
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express(); 

//Enabling every client reqeust to server (cors)
app.use(cors({
    origin: process.env.CORS_ORIGIN, 
    credentials: true, 
})); 

//Limit the json request to be only 16kb size
app.use(express.json({  limit: "16kb" })); 

//URL encoded with space structure should be 
app.use(express.urlencoded({ extended: true, limit: "16kb" })); 

//Store images or files in static on server
app.use(express.static("public")); 

//Use the cookie-parser (Middleware)
app.use(cookieParser()); 



export default app; 
