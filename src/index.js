
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { application } from 'express';
import app from './app.js'
dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MongoDb connection failed",err);
})
/*
( async( )=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}
            /${DB_NAME}`)
            application.on("errror",(error)=>{
                console.log("ERROR",err);
                throw error
            })
            app.listen(process.env.PORT.at,()=>{
                console.log("Server is running on port",process.env.PORT);
            })
    } catch (error) {
        console.log("ERROR",error);
        
    }
})*/