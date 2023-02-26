import {Link} from "react-router-dom";
import {AppBar} from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">   
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
        <span className="logo">
          <h3>Brooklyns</h3>
        </span>
        </Link>

        <div className="navItems">
          <button className="navButton" onClick={()=>navigate("/register")}>Register</button>
          <button className="navButton" onClick={()=>navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
