import {Link} from "react-router-dom";
import {AppBar} from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  
  return (
    <div className="navbar">
      <div className="navContainer">   
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
        <span className="logo">
          <h3>Brooklyns</h3> 
        </span>
        </Link> 

        {user?<p>Hello {user.username}</p> :<div className="navItems">
          <button className="navButton" onClick={()=>navigate("/register")}>Register</button>
          <button className="navButton" onClick={()=>navigate("/login")}>Login</button>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
