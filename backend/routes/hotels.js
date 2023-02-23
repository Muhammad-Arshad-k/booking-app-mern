import express from "express";
import {createNewHotel,updateHotel,deleteHotel,getOneHotel,getAllHotels, countByCity, countByCategory} from '../controllers/hotelController.js'
import { verifyAdmin,verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create users
router.post("/",verifyAdmin,createNewHotel)
//update
router.put("/:id",verifyAdmin,updateHotel);
//delete router
router.delete("/:id",verifyAdmin,deleteHotel)
//get single hotel
 router.get("/find/:id",getOneHotel);
 //get all hotel
 router.get("/",getAllHotels);
//get the count of resort on the basis of cities
router.get("/countByCity",countByCity);
//get the cout of resort on the basis of its types
router.get("/countByCategory",countByCategory)


export default router ;  