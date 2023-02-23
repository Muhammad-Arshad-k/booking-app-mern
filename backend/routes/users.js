import express from "express";
import {updateUser,deleteUser,getOneUser,getAllUsers} from '../controllers/UserController.js'
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hlo user you are authenticated")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("you are logged in and You can delete the account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("you are logged in and You can delete the account as admin")
// })


router.put("/:id",verifyUser, updateUser);
//delete router
router.delete("/:id",verifyUser,deleteUser)
//get s
 router.get("/:id",verifyUser,getOneUser);
 //get all hotel
 router.get("/",verifyAdmin,getAllUsers);

export default router ;  