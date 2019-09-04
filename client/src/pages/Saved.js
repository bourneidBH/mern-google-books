import React from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import BookResult from "../components/BookResult";

class Saved extends React.Component {
  state = {
    books: [],
  };

  // Method to Query the API/Database to GET all the books in the database.
  loadSavedBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  // Method to DELETE a particular book from the database.
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err))
  };

  // Lifecycle Method runs the 'loadSavedBooks' method when component mounts.
  componentDidMount() {
    this.loadSavedBooks()
  };

  render() {
    return (
      <div>
        <Jumbotron
          heading="Saved books"
          subhead="View or delete saved books"
        />
        {this.state.books.map(book => (
            <div className="container" key={book.id ? book._id : book.googleBookId}>
              <BookResult 
                id={book._id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                onClick={() => this.deleteBook(book._id)}
                buttonText="Delete"
              />
            </div>

          ))}
      </div>
    );
  };
};

export default Saved;