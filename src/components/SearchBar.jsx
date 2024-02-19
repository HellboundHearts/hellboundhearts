import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../css/SearchBar.css";

const API_URL = "https://books.adaptable.app/books";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

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
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
