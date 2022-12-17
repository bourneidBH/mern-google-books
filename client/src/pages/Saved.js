import { useState, useEffect } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import BookResult from "../components/BookResult";

const Saved = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadSavedBooks()
  }, [])

  // Method to Query the API/Database to GET all the books in the database.
  const loadSavedBooks = async () => {
    try {
      const result = await API.getSavedBooks()
      setBooks(result?.data)
    } catch (err) {
      console.log(err)
    }
  };

  // Method to DELETE a particular book from the database.
  const deleteBook = async (id) => {
    try {
      await API.deleteBook(id)
      loadSavedBooks()
    } catch (err) {
      console.log(err)
    }    
  };

  return (
    <div>
      <Jumbotron
        heading="Saved books"
        subhead="View or delete saved books"
      />
      {books?.map(book => (
        <div className="container" key={book._id}>
          <BookResult 
            id={book._id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book?.image ? book.image : null}
            link={book.link}
            onClick={() => deleteBook(book._id)}
            buttonText="Delete"
          />
        </div>
      ))}
    </div>
  );
}

export default Saved;