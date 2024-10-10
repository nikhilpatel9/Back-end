
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})

connectDB()
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