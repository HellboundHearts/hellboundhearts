import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL = "https://books.adaptable.app/books";

function NewArrivals() {
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="headingArrivals">New Arrivals</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="newArrivals">
          {books.map((book, i) => (
            <div key={i}>
              <Link to={`/books/${book.id}`}>
                <img src={book.image_url} alt={book.title} />
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default NewArrivals;
