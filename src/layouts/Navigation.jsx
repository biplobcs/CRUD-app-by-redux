import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/add-book" className="nav-link">
        Add-book
      </Link>
      <Link to="/show-book" className="nav-link">
        Show-book
      </Link>
    </nav>
  );
};

export default Navigation;
