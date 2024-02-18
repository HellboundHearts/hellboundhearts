import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const apiURL = "https://books.adaptable.app/books";

function AddBooks() {
  //state variables to store values of the inputs
  //const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  //handler functions for the inputs
  //const handleBookId = (e) => setBookId(e.target.value);
  const handleTitle = (e) => setTitle(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleCondition = (e) => setCondition(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);

  const navigate = useNavigate();
  const [booksToDisplay, setBooksToDisplay] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const newBook = {
    id,
    title,
    author,
    year,
    genre,
    condition,
    price: Number(price),
    image_url: imageUrl,
  };

  axios
    .post(`${apiURL}/new`, newBeer)
    .then((response) => {
      console.log(response);
      navigate("/books");
    })
    .catch((error) => {
      console.log("Error adding new beer:", error);
    });

  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form>
          <label>Title</label>
          <input
            className="form-control mb-4"
            type="text"
            name="title"
            placeholder="Book Title"
            value={title}
            onChange={handleTitle}
          />

          <label>Author</label>
          <input
            className="form-control mb-4"
            type="text"
            name="author"
            placeholder="Books Author"
            value={author}
            onChange={handleAuthor}
          />

          <label>Year</label>
          <input
            className="form-control mb-4"
            type="text"
            name="year"
            placeholder="Year"
            value={year}
            onChange={handleYear}
          />

          <label>Genre</label>
          <input
            className="form-control mb-4"
            type="text"
            name="genre"
            placeholder="Books Genre"
            value={genre}
            onChange={handleGenre}
          />

          <label>Condition</label>
          <input
            className="form-control mb-4"
            type="text"
            name="condition"
            placeholder="Books Condition"
            value={condition}
            onChange={handleCondition}
          />

          <label>Price</label>
          <input
            className="form-control mb-4"
            type="number"
            name="price"
            placeholder="Books Price"
            value={price}
            onChange={handlePrice}
            min={0}
            max={100}
          />

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={handleImageUrl}
          />

          <button className="btn btn-primary btn-round">Add Book</button>
        </form>
      </div>
    </>
  );
}

export default AddBooks;
