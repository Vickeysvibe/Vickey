import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
      <h1>Vibe</h1>
    </Link>
    <img src={logo} alt="" />
  </nav>
);
