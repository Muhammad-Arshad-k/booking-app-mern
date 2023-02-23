import User from "../models/User.js";
import { createError } from "../utils/error.js";


 export const updateUser= async(req,res,next)=>{
    const id = req.params.id
    try {
     const updatedUser = await User.findByIdAndUpdate(id ,{$set:req.body},{new:true})
     res.status(200).json(updatedUser);
    } catch (error) {
        next(err)
    }
 }
 export const deleteUser = async(req,res,next)=>{
    const id = req.params.id;
    try {
        await User.findOneAndDelete(id);
        res.status(200).json("User has beeen deleted")
    } catch (err) {
        next(err)
    }
 }

 export const getOneUser = async(req,res,next)=>{
    const id = req.params.id
    try {
     const user = await User.findById(id)
     res.status(200).json(user);
    } catch (err) {
        next(err)
    }
 }
 //get All User
 export const getAllUsers = async(req,res,next)=>{
     try {
      const users = await User.find();
      res.status(200).json(users);
     } catch (err) {
         next(err)
     }
 }