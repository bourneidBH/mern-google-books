import React from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import BookResult from "../components/BookResult";

class Saved extends React.Component {
    state = {books: []};

  // Method to Query the API/Database to GET all the books in the database.
  loadBookshelf = () => {
    API.getBookshelf()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  // Method to DELETE a particular book from the database.
  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadBookshelf())
      .catch(err => console.log(err))
  };

  // Lifecycle Method runs the 'loadBookshelf' method when component mounts.
  componentDidMount() {
    this.loadBookshelf()
  };

  render() {
    return (
      <div>
        <Jumbotron
          heading="Saved books"
          subhead="View or delete saved books"
        />
        <BookResult
          books={this.state.books}
          onClick={this.deleteBook}
          buttonText="Delete"
        />
      </div>
    );
  };
};

export default Saved;