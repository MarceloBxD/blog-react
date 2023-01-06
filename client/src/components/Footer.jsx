import React from "react";
import logo from "../assets/images/logo.jpg";
import "../style.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        {/* <img className="logo-img" src={logo} alt="logo" /> */}
      </div>
      <div className="message">Made with love by Marcelo Bracet</div>
    </div>
  );
};
