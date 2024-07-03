import { useState } from "react";
import { Link } from "react-router-dom";
import user from "/Images/user.png"



const Header = () => {
    const [showmenu,setshowmenu] = useState(false);
  
    return (
        <nav className= "header">
        <div className="logo">
           <h1><Link style={{ textDecoration: 'none',  color:'inherit'}} to={"/"}>Villa kitchen</Link></h1>
        </div>
        <ul className= "navbar" id={showmenu ? "open" : "close"}>
            <Link to="/" onClick={()=>setshowmenu(false)}
         className="nav-item">Home
            </Link>
            <Link to="/about" onClick={()=>setshowmenu(false)}
            className="nav-item">About
            </Link>
            <Link to="/contact" onClick={()=>setshowmenu(false)}
            className="nav-item">Contact Us
            </Link>
            <Link to="login" onClick={()=>setshowmenu(false)}
             className="nav-item login"><img src={user} alt="img" /><br id="br"/>Login
           </Link>
            
        </ul>
        <div className="menu" onClick={ () => {setshowmenu(!showmenu)}} >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        </div>
        </nav>
    );
}
export default Header;