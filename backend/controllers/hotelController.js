import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createNewHotel =   async(req,res,next)=>{
    const newHotel = new Hotel(req.body)

    try {
     const savedHotel = await newHotel.save();
     res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
 }

 export const updateHotel= async(req,res,next)=>{
    const id = req.params.id
    try {
     const updatedHotel = await Hotel.findByIdAndUpdate(id ,{$set:req.body},{new:true})
     res.status(200).json(updatedHotel);
    } catch (error) {
        next(err)
    }
 }
 export const deleteHotel = async(req,res,next)=>{
    const id = req.params.id;
    try {
        await Hotel.findOneAndDelete(id);
        res.status(200).json("hotel has beeen deleted")
    } catch (err) {
        next(err)
    }
 }

 export const getOneHotel = async(req,res,next)=>{
    console.log("helo")
    const id = req.params.id
    try {
     const hotel = await Hotel.findById(id)
     res.status(200).json(hotel);
    } catch (err) {
        next(err)
    }
 }
 //get All hotel
 export const getAllHotels = async(req,res,next)=>{
    const {limit,min,max,...others}=req.query
    //converting string into numbers
     const count = parseInt(limit)
     const minimum = parseInt(min)
     const maximum = parseInt(max)
     try {
      const hotels = await Hotel.find({...others,cheapestPrice:{$gt:minimum||10,$lt:maximum||10000}}).limit(count);
      console.log(hotels)
      res.status(200).json(hotels);
     } catch (err) {
         next(err)
     }
 }
 export const countByCity = async(req,res,next)=>{
    const cities = req.query.cities.split(",")
     try {
      const list = await Promise.all(cities.map(city=>{
        // return Hotel.find({city:city}).length
        return Hotel.countDocuments({city:city})
      }))
      res.status(200).json(list);
     } catch (err) {
         next(err)
     }
 }
 export const countByCategory= async(req,res,next)=>{
     try {
         const hotelCount = await Hotel.countDocuments({category:"hotel"});
         const apartmentCount = await Hotel.countDocuments({category:"apartment"});
         const resortCount  = await Hotel.countDocuments({category:"resort"});
         const villaCount  = await Hotel.countDocuments({category:"villa"});
         const cabinCount  = await Hotel.countDocuments({category:"cabin"});
        
     
      res.status(200).json([
        {category:"hotels",count:hotelCount},
        {category:"apartments",count:apartmentCount},
        {category:"resort",count:resortCount},
        {category:"villa",count:villaCount},
        {category:"cabin",count:cabinCount}
      ]);
     } catch (err) {
         next(err)
     }
 }