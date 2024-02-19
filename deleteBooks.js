
import axios from 'axios';

//execute the program: node deleteBooks.js
const API_URL = "https://books.adaptable.app";

const deleteSpecificBooks = (bookIds) => {
  bookIds.forEach((bookId) => {
    axios
      .delete(`${API_URL}/books/${bookId}`)
      .then((response) => {
        console.log("Book deleted successfully",response.data);
      })
      .catch((error) => {
        console.log("Error deleting the book with id: " + bookId);
        console.error(error);
      });
  });
};

// Delete specifics books
const bookIdsToDelete = ["id1", "id2", "id3"]; // Replace by real id  of books to delete
deleteSpecificBooks(bookIdsToDelete);

export { deleteExtraBooks };
