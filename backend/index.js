import  express  from "express";
import dotenv from "dotenv"
import connectDatabase from "./config/Database.js";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
dotenv.config();

  
//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors());


app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute) 

//error handling middleware
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack :err.stack 
    });
});
 

app.listen(4000,()=>{  
    connectDatabase();            
    console.log("connected to backend")
}) 