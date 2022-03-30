import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header-component">
      <nav className="inital-nav">
        <Link to="/home">Home</Link> | <Link to="/ratings">Ratings</Link>
      </nav>
      <h1 className="logo-container">🐷 BBQ App 🐷</h1>
      <nav className="second-nav">
        <Link to="/login">Log In</Link> | <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
