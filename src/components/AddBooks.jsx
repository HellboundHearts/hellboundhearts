import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/addBooks.css'

const apiURL = "https://books.adaptable.app";

function AddBooks() {
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
  //const [booksToDisplay, setBooksToDisplay] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log("ID:", bookId);
  console.log("Title:", title);
  console.log("Author:", author);
  console.log("price: ",price)
  console.log("imageUrl: ",imageUrl)

  const newBook = {
    id: bookId,
    title,
    author,
    year,
    genre,
    condition,
    price: price,
    image_url: imageUrl,
  };
/***add a book request ...something wrong here... */
 // useEffect(() => {
    axios
      .post(`${apiURL}/books`, newBook)
      .then((response) => {
        console.log('book added here/deleted??: ',response.data);
        navigate("/books");
      })
      .catch((error) => {
        console.log("Error adding new book:", error);
      });
   // }, []);
  };

  // useEffect(() => {
  //   // Aucune action n'est nécessaire ici, car la logique de la requête POST est déjà gérée dans handleSubmit
  // }, [bookId, title, author, year, genre, condition, price, imageUrl]); 


  return (
    <>
      <div className="AddBooks">
        <div className="d-inline-flex flex-column w-100 p-4">
          <form onSubmit={handleSubmit}>
            
            <input
              required
              type="text"
              name="bookId"
              placeholder="Book ID"
              value={bookId}
              onChange={handleBookId}
            />
            <input
              required
              type="text"
              name="title"
              placeholder="Book Title"
              value={title}
              onChange={handleTitle}
            /> 
            <input
              required
              type="text"
              name="author"
              placeholder="Books Author"
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
            />
            <input
              required
              type="text"
              name="genre"
              placeholder="Books Genre"
              value={genre}
              onChange={handleGenre}
            />
            <input
              required
              type="text"
              name="condition"
              placeholder="Books Condition"
              value={condition}
              onChange={handleCondition}
            />
           
            <input
             required
              type="text"
              // pattern="\d*"
              name="price"
              placeholder="price"
              value={price}
              onChange={handlePrice}
              
            />
            
            <input
              required
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={imageUrl}
              onChange={handleImageUrl}
            />
            <button>Add Book</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBooks;
