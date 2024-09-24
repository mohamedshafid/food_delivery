import React from 'react';
import "./Footer.css";
import facebook from "../../assets/facebook_icon.png";
import twitter from "../../assets/twitter_icon.png";
import linkedin from "../../assets/linkedin_icon.png";

const Footer = () => {
  return (
    <div className="footer"> 
      <h1>You Can <span>Contact With As</span></h1>
      <div className="socialmedia-icons">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={linkedin} alt="" />
      </div>
      <ul className="footer-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contacts</li>
      </ul>
      <p>&copy; 2024 All Rights Reserved</p>
    </div>
  )
}

export default Footer;
