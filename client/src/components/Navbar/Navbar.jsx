import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import swiggy_logo from "../../assets/swiggy-logo.png";
import search_icon from "../../assets/search_icon.png";
import basket_icon from "../../assets/basket_icon.png";
import { Link } from "react-router-dom";
import { ShowContext } from "../../Context/ShowContext";
import profile from "../../assets/me4.jpg";

const Navbar = ({ setAuthen }) => {
  const { foodQuantity, cart_count, token, setToken } = useContext(ShowContext);
  const [userClicked,setUserClicked]=useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img src={swiggy_logo} alt="" />
        </Link>
      </div>
      <ul className="navbar-links">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <li>Home</li>
        </Link>
        <li>Menu</li>
        <li>Menu-list</li>
        <li>App-Info</li>
        <li>Contacts</li>
      </ul>
      <div className="navbar-cart">
        <div className="cart-display">
          <Link to="/cart">
            <img src={basket_icon} alt="" className="basket_icon" />
          </Link>
          <div className="cart-count">{cart_count}</div>
        </div>
        {token ? (
          <div className="logout-user">
            <img
              src={profile}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              className="profile"
              onClick={()=>setUserClicked(true)}
            />
            {userClicked?<div className="logout" >
              <p style={{background:"gray"}} onClick={()=>setToken("")} >LogOut</p>
            </div>:<></>}
            
          </div>
        ) : (
          <button onClick={() => setAuthen(true)}>LogIn</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
