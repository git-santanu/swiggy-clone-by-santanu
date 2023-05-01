import React from "react";
import logo from '../../assests/logo/banner-image.jpg' 
const index = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img
            className="image"
            src={logo}
            alt="abc"
          />
        </div>
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>Sign In</li>
            <li>Cart (0)</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
