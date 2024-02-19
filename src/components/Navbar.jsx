import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <>
      <ul className="Navbar">
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/shipping">Shipping</Link>
        </li>
      </ul>
      <hr
        style={{
          border: "none",
          height: "2px", // Set the height of the line
          backgroundColor: "#ccc", // Set the color of the line
          margin: "10px 0", // Add margin for spacing
        }}
      />
    </>
  );
}

export default Navbar;
