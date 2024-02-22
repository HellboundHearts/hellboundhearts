import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Shipping from "./pages/Shipping.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import EditBooks from "./pages/EditBooks.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomePage from "./pages/HomePage.jsx";
import BookDetailsPage from "./pages/BookDetails.jsx";
import "./App.css";

const API_URL = "https://books.adaptable.app";

function App() {
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleBuy = (bookDetails) => {
    setSelectedBooks([...selectedBooks, bookDetails]);
    console.log("Selected Books:", selectedBooks);
  };

  const handleDelete = (bookId) => {
    setSelectedBooks((prevSelectedBooks) =>
      prevSelectedBooks.filter((book) => book.id !== bookId)
    );

    axios
      .delete(`${API_URL}/books/${bookId}`)
      .then((response) => {
        console.log("Book deleted successfully", response.data);
      })
      .catch((error) => {
        console.log("Error deleting the book with id: " + bookId);
        console.error(error);
      });
  };

  const handleShoppingCartDelete = (bookToDelete) => {
    setSelectedBooks((prevSelectedBooks) =>
      prevSelectedBooks.filter((book) => book.id !== bookToDelete.id)
    );
  };

  const calculateTotalPrice = () => {
    return selectedBooks.reduce((total, book) => total + book.price, 0);
  };

  return (
    <div className="app-container">
      <Header selectedBooks={selectedBooks} />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/books" element={<Books handleBuy={handleBuy} />} />
        <Route
          path="/shoppingCart"
          element={
            <ShoppingCart
              selectedBooks={selectedBooks}
              handleShoppingCartDelete={handleShoppingCartDelete}
              handleBuy={handleBuy}
              total={calculateTotalPrice()}
            />
          }
        />
        <Route
          path="/books/:bookId/edit"
          element={<EditBooks handleDelete={handleDelete} />}
        />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
