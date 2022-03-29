import React from "react";
import { Link } from 'react-router-dom';


function Header() {
  return (
  <header>
    <div className="logo-container"></div>
    <nav>
      <Link to="/home">Home</Link> | {" "}
      <Link to="/ratings">Ratings</Link>
    </nav>
  </header>
  );
}

export default Header;