import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  // let token = sessionStorage.getItem("token");
  // const secondNav = () => {
  //   return token  ? (
  //     <Link to="/login">Log In</Link> | <Link to="/register">Sign Up</Link>
  //   ) : (
  //     <Link to="/logout">Log Out</Link>
  //   );
  // };
  return (
    <header className="header-component">
      <nav className="inital-nav">
        <Link to="/">Home</Link> | <Link to="/ratings">Ratings</Link>
      </nav>
      <h1 className="logo-container">🐷 BBQ App 🐷</h1>
      <nav className="second-nav">
        <Link to="/login">Log In</Link> | <Link to="/register">Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
