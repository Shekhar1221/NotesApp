import React, { useEffect, useState } from "react";

import "./style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../store/userSlice";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutt,setLogoutt]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleClick=(e)=>{
    setLogoutt(true)
    dispatch(logout())
    navigate('/')
  }

  // useEffect(()=>{
  //     if(logout){
  //        navigate('/')
  //     }
  // },[logout])

  // console.log(logout)

  return (
    <nav>
      <Link to="/" className="title">
        Notes Application
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/notes/create">Create</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <button className="logoutBtn" onClick={handleClick}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar