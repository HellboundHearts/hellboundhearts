import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

function Header() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <Link to="/">
        <img className="Logo" src="src/assets/illustrations/Logo_01.jpg" />
      </Link>
      <div>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>
  );
}

export default Header;
