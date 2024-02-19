import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Shipping from "./pages/Shipping.jsx";

import NotFound from "./pages/NotFound.jsx";
import HomePage from "./pages/HomePage.jsx";
import BookDetailsPage from "./pages/BookDetails.jsx";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
