import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddBooks from "../components/AddBooks";
import { FaSearch } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import "../css/books.css";

const SearchBar = ({ searchTerm, handleSearch }) => (
  <div className="Search-Bar">
    <div className="Search-Container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <FaSearch id="search-icon" />
    </div>
  </div>
);

function Books({ handleBuy }) {
  const API_URL = "https://books.adaptable.app";

  const [books, setBooks] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBooks, setSelectedBooks] = useState([]);

  const getAllBooks = () => {
    axios
      .get(`${API_URL}/books?_embed=tasks`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log("Error getting books from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleDelete = (bookId) => {
    axios
      .delete(`${API_URL}/books/${bookId}`)
      .then((response) => {
        getAllBooks();
        console.log("Book deleted successfully", response.data);
      })
      .catch((error) => {
        console.log("Error deleting the book with id: " + bookId);
        console.error(error);
      });
  };

  useEffect(() => {
    console.log("Selected Books updated:", selectedBooks);
  }, [selectedBooks]);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  const filteredBooks = books
    ? books.filter((bookDetails) =>
        bookDetails.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <AddBooks callBack={getAllBooks} />
      <div>
        {filteredBooks.length === 0 ? (
          <p>No matching books found.</p>
        ) : (
          filteredBooks.map((bookDetails) => (
            <div key={bookDetails.id}>
              <Link to={`/books/${bookDetails.id}`}>
                <p className="book-covers">
                  <img src={bookDetails.image_url} alt={bookDetails.title} />
                </p>
              </Link>
              <h2>{bookDetails.title} </h2>
              <h3>{bookDetails.author}</h3>
              <h3>{bookDetails.price}</h3>
              <FaShoppingCart
                className="buy-button"
                onClick={() => {
                  handleBuy(bookDetails);
                }}
              ></FaShoppingCart>{" "}
              <IoTrashBin
                className="delete-button"
                onClick={() => handleDelete(bookDetails.id)}
              ></IoTrashBin>{" "}
              <Link
                className="edit-button"
                to={`/books/${bookDetails.id}/edit`}
              >
                <FaEdit type="submit"></FaEdit>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Books;
