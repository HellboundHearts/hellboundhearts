import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

function Header() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Link to="/">
        <img className="Logo" src="src/assets/illustrations/Logo_01.jpg" />
      </Link>
      <div>
        <SearchBar setSearchResults={setSearchResults} />
        {searchResults && searchResults.length > 0}
        <SearchResultsList searchResults={searchResults} />
      </div>
    </div>
  );
}

export default Header;
