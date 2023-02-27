
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import axios from "../../../src/axios";
import { SmartButton } from "@mui/icons-material";

function Login() {
  const [credentials, setCredetials] = useState({
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem('user'));
    if(isAuth && isAuth !== null) {
        navigate("/");
    }
 }, []);

  const { loading, error, dispatch } = useContext(AuthContext);
  

  const handleChange = (e) => {
    const newName = e.target.name;
    const newPassword = e.target.value;
    setCredetials((prev) => ({ ...prev, [newName]: newPassword }));
  };
  const handleClick=async e=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login",credentials);
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
      navigate("/")
    }catch(err){
      dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
    }
  };


  return (
    <div className=" bg-custom  flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-10 ">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#115e59]">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input 
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="bg-[#155e75] w- hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-3 mb-3"
              type="button"
              onClick={handleClick}
              disabled={loading}
            >
              Sign In
            </button>
            {error && <p className="text-[#be123c] text-center m-2">{error.message}</p>}
            <h1 className=" " href="#">
              Forgot Password?
            </h1>
          </div>
        </form>
        <div className="m-5 ">
          dont have an account?
          <Link className="text-[#1d4ed8]" to="/register">
            register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
