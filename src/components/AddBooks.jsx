import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/addBooks.css";

const apiURL = "https://books.adaptable.app";

function AddBooks(props) {
  //state variables to store values of the inputs
  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  //handler functions for the inputs
  const handleBookId = (e) => setBookId(e.target.value);
  const handleTitle = (e) => setTitle(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleCondition = (e) => setCondition(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: Number(bookId),
      title,
      author,
      year,
      genre,
      condition,
      price: Number(price),
      image_url: imageUrl,
    };

    axios
      .post(`${apiURL}/books`, newBook)
      .then((response) => {
        console.log("book added here: ", response.data);
        props.callBack();
      })
      .catch((error) => {
        console.log("Error adding new book:", error);
      });
  };

  return (
    <>
      <div className="AddBooks">
        <form className="input-fields" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="bookId"
            placeholder="Book ID"
            value={bookId}
            onChange={handleBookId}
            /***Added for validation check */
            pattern="[0-9]+"
            title="Please enter a valid number for the id"
          />
          <input
            required
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleTitle}
          />
          <input
            required
            type="text"
            name="author"
            placeholder="Author"
            value={author}
            onChange={handleAuthor}
          />
          <input
            required
            type="text"
            name="year"
            placeholder="Year"
            value={year}
            onChange={handleYear}
            /***Added for validation check */
            pattern="[0-9]+"
            title="Please enter a valid number for the year"
          />
          <input
            required
            type="text"
            name="genre"
            placeholder="Genre"
            value={genre}
            onChange={handleGenre}
          />
          <input
            required
            type="text"
            name="condition"
            placeholder="Condition"
            value={condition}
            onChange={handleCondition}
          />

          <input
            className="form-control mb-4"
            type="text"
            name="price"
            placeholder="price"
            value={price}
            onChange={handlePrice}
            /***Added for validation check */
            pattern="[0-9]+"
            title="Please enter a valid number for the price"
          />

          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={handleImageUrl}
          />
          <button type="submit" className="addbook-button">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBooks;
