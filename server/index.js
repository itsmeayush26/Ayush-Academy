import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";

dotenv.config({});

//connect and call  db connect  here 
connectDB();

const app=express();


const PORT =process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"https://localhost:8080",
    credentials:true

}))

app.use("/api/v1/user", userRoute);


app.listen(PORT, ()=>{
    console.log (`server listenning to port ${PORT}`)
}
)