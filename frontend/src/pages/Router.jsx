import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import Hotel from "./hotel/Hotel";
import List from "./list/List";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AdminHome from "./adminPages/AdminHome/AdminHome";

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotels" element={<List/>}/>
            {/* auth */}
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
             {/* admin */}
             <Route path="/admin" element={<AdminHome/>} />
        </Routes> 
    )
}

export default Router;