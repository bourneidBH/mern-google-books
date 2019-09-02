import React from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import BookResult from "../components/BookResult";
import API from "../utils/API";

// Format the book results from the API
const formatBookResults = googleApiResults => {
    const bookArray = [];
  
    googleApiResults.map(book => {
  
      const formattedBook = {
        googleBookId: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors
          ? book.volumeInfo.authors
          : ['No Author Listed.'],
        description: book.volumeInfo.description
          ? book.volumeInfo.description
          : 'No Description Listed.',
        image: book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/170px-No_image_available.svg.png',
        link: book.volumeInfo.infoLink,
      };
  
      bookArray.push(formattedBook);
      return bookArray
    });
    return bookArray;
  };
  

class Search extends React.Component {
  state = {
    search: '',
    results: []
  };

    // Method for saving a particular book to the database.
  saveBook = event => {

    const chosenBook = this.state.results.find(book => book.googleBookId === event.target.id);

    const newSave = {
      title: chosenBook.title,
      authors: chosenBook.authors,
      description: chosenBook.description,
      googleBookId: chosenBook.googleBookId,
      thumbnail: chosenBook.thumbnail,
      link: chosenBook.link,
      saved: true
    };

    API.saveBook(newSave)
      .then(() => {
        this.setState({
          books: this.state.books.filter(book => book.saved === true)
        });      
      })
      .catch(err => console.log(err));

  };

    handleInputChange = event => {
      this.setState({search: event.target.value})
    };

    handleFormSubmit = event => {
      event.preventDefault();
      API.getGoogleBooks(this.state.search)
        .then(res => {
          const formattedArray = formatBookResults(res.data.items);
          this.setState({results: formattedArray});
        })
        .catch(err => console.log(err))
    };

    render() {
        return (
          <div>
            <Jumbotron 
              heading="Book Search"
              subhead="Search for and save titles to a reading list"
            />
            <SearchForm 
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <BookResult
              books={this.state.results}
              onClick={this.saveBook}
              buttonText="Save"
            />
          </div>
    
        );
      };

};

export default Search;
