import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddBooks from "../components/AddBooks";
import { FaSearch } from "react-icons/fa";
import ShoppingCart from "./ShoppingCart";
import "../css/books.css";

const SearchBar = ({ searchTerm, handleSearch }) => (
  <div className="Search-Bar">
    <FaSearch id="search-icon" />
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
    />
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

  // const handleBuy = (bookDetails) => {
  //   setSelectedBooks([...selectedBooks, bookDetails]);
  //   console.log("Selected Books:", selectedBooks);
  // };

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
              <button
                className="delete-button"
                onClick={() => handleDelete(bookDetails.id)}
              >
                Delete
              </button>{" "}
              <button
                className="buy-button"
                onClick={() => handleBuy(bookDetails)}
              >
                Buy
              </button>{" "}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Books;
