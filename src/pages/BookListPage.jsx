import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BookListPage() {

    const API_URL = "http://localhost:5000" //i need to use your link

    const [books, setBooks] = useState(null);

    const getAllBooks = () => {
        axios.get(`${API_URL}/books?_embed=tasks`)
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.log("Error getting books from the API...");
                console.log(error);
            });
    }

    useEffect(() => {
        getAllBooks()
    }, []);


    return (
        <div className="ProjectListPage">

            {books === null
                ? <p>Loading...</p>
                : books.map((bookDetails) => {
                    return (
                        <div className="ProjectCard card" key={bookDetails.id} >
                            <Link to={`/books/${bookDetails.id}`}>
                                <h3>{bookDetails.title}</h3>
                            </Link>
                        </div>
                    )
                })}
        </div>
    );
}

export default BookListPage;