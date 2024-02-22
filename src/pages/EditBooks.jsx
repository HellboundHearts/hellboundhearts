import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import "../css/editBooks.css";

function EditBooks() {
  const API_URL = "https://books.adaptable.app";

  const [editBookId, setEditBookId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editYear, setEditYear] = useState("");
  const [editGenre, setEditGenre] = useState("");
  const [editCondition, setEditCondition] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editImageUrl, setEditImageUrl] = useState("");

  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // get project details from the API (so that we can pre-populate the form)
    axios
      .get(`${API_URL}/books/${bookId}`)
      .then((response) => {
        console.log(response.data);
        setEditBookId(response.data.bookId);
        console.log(response.data.title);
        setEditTitle(response.data.title);
        console.log(response.data.author);
        setEditAuthor(response.data.author);
        console.log(response.data.year);
        setEditYear(response.data.year);
        console.log(response.data.genre);
        setEditGenre(response.data.genre);
        console.log(response.data.condition);
        setEditCondition(response.data.condition);
        console.log(response.data.price);
        setEditPrice(response.data.price || 0);
        console.log(response.data.imageUrl);
        setEditImageUrl(response.data.imageUrl);
      })
      .catch((error) => {
        console.log("Error getting project details from the API...");
        console.log(error);
      });
  }, [bookId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editBook = {
      id: Number(editBookId),
      title: editTitle,
      author: editAuthor,
      year: editYear,
      genre: editGenre,
      condition: editCondition,
      price: Number(editPrice),
      image_url: editImageUrl,
    };

    axios
      .put(`${API_URL}/books/${bookId}`, editBook)
      .then((response) => {
        navigate(`/books/${bookId}`);
      })
      .catch((error) => {
        console.log("Error updating book...");
        console.log(error);
      });
  };

  return (
    <div className="EditBook">
      <h3></h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookId"
          placeholder="Book ID"
          value={editBookId}
          onChange={(e) => setEditBookId(e.target.value)}
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={editAuthor}
          onChange={(e) => setEditAuthor(e.target.value)}
        />

        <input
          type="text"
          name="year"
          placeholder="Year"
          value={editYear}
          onChange={(e) => setEditYear(e.target.value)}
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={editGenre}
          onChange={(e) => setEditGenre(e.target.value)}
        />

        <input
          type="text"
          name="condition"
          placeholder="Condition"
          value={editCondition}
          onChange={(e) => setEditCondition(e.target.value)}
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          value={editPrice}
          onChange={(e) => setEditPrice(e.target.value)}
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={editImageUrl}
          onChange={(e) => setEditImageUrl(e.target.value)}
        />

        <button type="submit" className="edit-button">
          <FaEdit />
        </button>
      </form>
    </div>
  );
}

export default EditBooks;
