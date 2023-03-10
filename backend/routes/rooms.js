import express from "express";
import { createRoom,updateRoom,deleteRoom,getOneRoom,getAllRooms, updateRoomAvailalability } from "../controllers/roomController.js";
import { verifyAdmin,verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create users
router.post("/:hotelid",verifyAdmin,createRoom)
//update
router.put("/:id",verifyAdmin,updateRoom);

router.put("/availability/:id",updateRoomAvailalability)
//delete router
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)
//get single Room
 router.get("/:id",getOneRoom);
 //get all Room
 router.get("/",getAllRooms);

export default router ;     