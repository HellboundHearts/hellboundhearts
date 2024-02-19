import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

function Header() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <Link to="/">
        <img className="Logo" src="src/assets/illustrations/Logo_01.jpg" />
      </Link>
    </div>
  );
}

export default Header;
