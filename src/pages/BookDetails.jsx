import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../css/booksDetails.css";
import { TiArrowBack } from "react-icons/ti";

function BookDetailsPage() {
  const API_URL = "https://books.adaptable.app";

  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  const [error, setError] = useState(null);

  /***Data validation */
  const validateYear = (year) => {
    if (!Number.isNaN(year)) {
      setError(null); // if validation ok
    } else {
      setError("Year should be a number");
    }
  };

  useEffect(() => {
    if (book) {
      validateYear(book.year);
    }
  }, [book]);

  const getBook = () => {
    //axios.get(`${API_URL}/books/${bookId}?_embed=books`)
    axios
      .get(`${API_URL}/books/${bookId}`)
      .then((response) => {
        console.log("response.data: ", response.data);
        setBook(response.data);
      })
      .catch((error) => {
        console.log("Error getting book details from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="BookDetailsPage">
      {book === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Title : {book.title}</h1>
          <p>Author : {book.author}</p>
          <p>Year : {book.year}</p>

          <p>Genre : {book.genre}</p>
          <p>Condition : {book.condition}</p>
          <p>Price : {book.price}</p>
          <p className="book-covers-detail">
            <img src={`../${book.image_url}`} alt="my image"></img>
          </p>
        </>
      )}

      <Link to="/books">
        <TiArrowBack className="back-button" />
      </Link>
    </div>
  );
}

export default BookDetailsPage;
