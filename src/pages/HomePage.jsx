import React, { useState } from "react";
import "../index.css";
import "../css/navbar.css"
import NewArrivals from "../components/NewArrivals";
import Navbar from './../components/Navbar';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <section className="FrontImage">
        <img
          className="homepage-image"
          src="src/assets/illustrations/Home_01.jpg"
        ></img>

        {/* <NewArrivals books={books} /> */}
      </section>
    </div>
  );
};

export default HomePage;
