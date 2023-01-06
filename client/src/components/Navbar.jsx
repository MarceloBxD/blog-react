import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import "../style.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} className="logo-img" />
      </div>
      <div className="nav-items">
        <div className="nav-item">Art</div>
        <div className="nav-item">Science</div>
        <div className="nav-item">Technology</div>
        <div className="nav-item">Cinema</div>
        <div className="nav-item">Design</div>
        <div className="nav-item">Food</div>
        <div className="logout">
          <p>John</p>
          <p>Logout</p>
        </div>
        <div className="write">
          <Link className="link" to="/write">
            Write
          </Link>
        </div>
      </div>
    </div>
  );
};
