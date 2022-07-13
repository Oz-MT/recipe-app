import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/home" style={{ textDecoration: "none", cursor: "pointer" }}>
          {"<ED8EN/>"}
          <span>RECIPE</span>
        </Link>
      </div>

      <Link to="/about" style={{ textDecoration: "none" }}>
        ABOUT
      </Link>
      <div>
        <a href="https://github.com/Oz-MT">GİTHUB</a>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        LOGOUT
      </Link>
    </div>
  );
};

export default Navbar;
