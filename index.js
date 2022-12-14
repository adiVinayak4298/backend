import express, { json } from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from './routes/auth.js'
const router  = express.Router();


const app = express();
dotenv.config();

// const connect = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO);
//         console.log("mongodb connected!");
//     } catch (error) {
//         throw error;
//     }
// };

// app.listen("8800",()=>{
//     // connect();
//     console.log("connected to backend.");
// });
console.log("26")
app.use(cookieParser());
app.use(cors());
app.use(express.json());
console.log("30")

router.get('/',()=>{
    console.log("letsgo")
    res.status(200).send("good health");
});
app.use('/api/auth',authRoute);

app.use((err,req,res,next)=>{
    console.log("errmiddleware")
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong!";
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMessage,
        stack:err.stack
    });
})

