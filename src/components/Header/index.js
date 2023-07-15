import React, { useState } from "react";
import logo from "../../assests/logo/banner-image.jpg";
import { Route, Link } from "react-router-dom";
const Index = () => {
  const [isClicked, setIsclicked] = useState(false);
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img className="image" src={logo} alt="abc" />
        </div>
        <div className="nav-container">
          <ul>
            <li>
              {" "}
              <Link to="/" className="header-links">Home</Link>
            </li>
            <li>Sign In</li>
            <li>Cart (0)</li>
            <li>  
              <Link to="/contact" className="header-links">Contact</Link>
            </li>
            <button
              className="login-btn"
              onClick={() => setIsclicked(!isClicked)}
            >
              {" "}
              {!isClicked ? "Login" : "Logout"}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;
