import React from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css'


function Navbar() {
  return (
    <>
      <ul className="Navbar">
        <li className="Box">
          <Link to="/genres">Genres</Link>
        </li>
        <li className="Box">
          <Link to="/about">About</Link>
        </li>
        <li className="Box">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="Box">
          <Link to="/shipping">Shipping</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
