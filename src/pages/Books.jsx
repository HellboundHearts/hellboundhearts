import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddBooks from "../components/AddBooks";

function Books() {
  const API_URL = "https://books.adaptable.app";

  const [books, setBooks] = useState(null);

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
        // Refresh list of books after the delete
        getAllBooks();
        console.log("Book deleted successfully", response.data);
      })
      .catch((error) => {
        console.log("Error deleting the book with id: " + bookId);
        console.error(error);
      });
  };


  return (
    <>
    <AddBooks />
    <div className="ProjectListPage">
      {books === null ? (
        <p>Loading...</p>
      ) : (
        books.map((bookDetails) => {
          return (
            <div className="ProjectCard card" key={bookDetails.id}>
              <h2>{bookDetails.title}{" "} <button onClick={() => handleDelete(bookDetails.id)}>Delete</button> </h2>
              <h3>{bookDetails.author}</h3>
              <h3>{bookDetails.price}</h3>
              <Link to={`/books/${bookDetails.id}`}>
                
                
                <h3>
                  <img src={bookDetails.image_url}></img>
                </h3>
              </Link>
            </div>
          );
        })
      )}
    </div>
    </>
  );
}

export default Books;
