import React, { useState } from "react";
import "../css/homepage.css";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <section className="FrontImage">
        <img
          className="homepage-image"
          src="./assets/illustrations/Home_01.jpg"
        ></img>
      </section>
    </div>
  );
};

export default HomePage;
