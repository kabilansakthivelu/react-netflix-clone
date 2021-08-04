import React from "react";
import logo from "../images/netflix-image.png";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" width="90px" />
      <FaRegUser className="register-icon" />
    </header>
  );
};

export default Header;
