import express from "express";
const router = express.Router();
import { register,login } from "../controllers/authController.js";

//signup or register route
router.post("/register",register);
//get Users
router.post('/login',login)

export default router ;
