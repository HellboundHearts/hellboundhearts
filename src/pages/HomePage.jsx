import React from "react";
import '../index.css'
import BookListPage from '../components/BookListPage';
import BookDetails from './BookDetails'

const HomePage = () => {
  return (
    <div>
       <section className="FrontImage">
         {/* <img className="homepage-image" src="src/assets/illustrations/Home_01.jpg"></img>  */}
           <BookListPage /> 
          <BookDetails />
      </section> 
    </div>
  );
};

export default HomePage;
