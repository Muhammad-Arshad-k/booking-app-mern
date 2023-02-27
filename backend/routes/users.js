import express from "express";
import {updateUser,deleteUser,getOneUser,getAllUsers} from '../controllers/UserController.js'
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";


const router = express.Router();


router.put("/:id",verifyUser, updateUser);
//delete router
router.delete("/:id",verifyUser,deleteUser)
//get s
 router.get("/:id",verifyUser,getOneUser);
 //get all hotel
 router.get("/",verifyAdmin,getAllUsers);

export default router ;  