import React, { useState, useContext } from "react";
import logo from "../../assests/logo/banner-image.jpg";
import { Link } from "react-router-dom";
import useActiveStatus from "../../utils/useActiveStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Index = () => {
  const [isClicked, setIsclicked] = useState(false);

  const activeStatus = useActiveStatus();
  const { loggedInUser } = useContext(userContext);
  const cartSelector = useSelector((store) => store.cart.items);

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
              <Link to="/" className="header-links">
                Home
              </Link>
            </li>
            <li>Sign In</li>
            <li style={{ fontWeight: "bold", cursor: "pointer" }}>
              <Link to="/cart" className="header-links">
                Cart ({cartSelector.length})
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header-links">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cabs" className="header-links">
                Cabs
              </Link>
            </li>
            <li>
              <Link className="header-links">
                {loggedInUser} {activeStatus ? "🟢" : "🔴"}
              </Link>
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
