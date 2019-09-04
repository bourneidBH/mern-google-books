import React from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import BookResult from "../components/BookResult";
import API from "../utils/API";

class Search extends React.Component {
  state = {
    books: [],
    search: ""
  };

  handleInputChange = event => {
    this.setState({search: event.target.value});
  };

  saveBook = bookID => {
    const book = this.state.books.find(book => book.id === bookID);
    API.saveBook({
      googleBookId: book.volumeInfo.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      saved: true
    }).then(() => {
      this.setState({
        books: this.state.books.filter(book => book.saved === true)
      });
    }).catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getGoogleBooks(this.state.search)
    .then( results => {
      this.setState({ books: results.data.items });
      console.log({books: results.data.items});
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron 
          heading="Google Books"
          subhead="Search for and save titles to a reading list"
        />
        <h3 className="blue-text centered">Book Search</h3>
        <SearchForm 
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        
        {this.state.books.map(book => (
          <div className="container" key={book.id ? book.id : book.googleBookId}>
            <BookResult 
              id={book.volumeInfo.id}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.thumbnail}
              link={book.volumeInfo.infoLink}
              onClick={() => this.saveBook(book.id)}
              buttonText="Save"
            />

          </div>

        ))}
      </div>

    );
  };
};

export default Search;