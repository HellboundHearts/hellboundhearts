import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const API_URL = "https://books.adaptable.app/books";

function SearchBar({ setSearchResults }) {
  const [searchInput, setSearchInput] = useState("");

  const fetchData = (value) => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((book) => {
          return (
            value &&
            book &&
            book.title &&
            book.title.toLowerCase().includes(value) &&
            book.author &&
            book.author.toLowerCase().includes(value) &&
            book.genre &&
            book.genre.toLowerCase().includes(value)
          );
        });
        setSearchResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setSearchInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
