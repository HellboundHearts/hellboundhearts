import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import { FaShoppingCart } from "react-icons/fa";
import "../css/shoppingCart.css";
import ShoppingCart from "../pages/ShoppingCart";

function Header() {
  const [results, setResults] = useState([]);

  return (
    <div className="header-container">
  <div className="logo-container">
    <Link to="/">
      <img className="Logo" src="src/assets/illustrations/Logo_01.jpg" />
    </Link>
  </div>
  <div className="cart-container">
    <Link to="/shoppingCart">
      <FaShoppingCart className="Shopping-Cart" />
    </Link>
  </div>
</div>
  );
}

export default Header;
