import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js"; 
import { createError } from "../utils/error.js";

export const createRoom = async (req,res,next)=>{
  const hotelId  = req.params.hotelid;
  const newRoom = new Room(req.body)

  try {
    const savedRoom = await newRoom.save();
    try {
        await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}});
    } catch (err) {
        next(err)
    }
    res.status(200).json(savedRoom)
  } catch (err) {
    next(err)
  }
}

export const updateRoom= async(req,res,next)=>{
    const id = req.params.id
    try {
     const updatedRoom = await Room.findByIdAndUpdate(id ,{$set:req.body},{new:true})
     res.status(200).json(updatedRoom);
    } catch (err) {
        next(err)
    }
 }
 export const deleteRoom = async(req,res,next)=>{
    const id = req.params.id
    const hotelId  = req.params.hotelid;
    try {
        await Room.findOneAndDelete(id);
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:id}});
        } catch (err) {
            next(err)
        }
        res.status(200).json("Room has beeen deleted")
    } catch (err) {
        next(err)
    }
 }

 export const getOneRoom = async(req,res,next)=>{
    const id = req.params.id
    try {
     const room = await Room.findById(id);
     res.status(200).json(room);
    } catch (err) {
        next(err)
    }
 }
 //get All Room
 export const getAllRooms = async(req,res,next)=>{
     try {
      const rooms = await Room.find();
      res.status(200).json(rooms);
     } catch (err) {
         next(err)
     }
 }