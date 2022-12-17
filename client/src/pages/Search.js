import { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import BookResult from "../components/BookResult";
import API from "../utils/API";

const Search = () => {
  const [search, setSearch] = useState("")
  const [books, setBooks] = useState([])

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  const saveBook = async (bookID) => {
    const book = books?.find(book => book.id === bookID);
    try {
      await API.saveBook({
        googleBookId: book.volumeInfo.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book?.volumeInfo?.imageLinks?.thumbnail || "",
        link: book.volumeInfo.infoLink,
        saved: true
      })
      setBooks(books.filter(book => book.id !== bookID))
    } catch (err) {
      console.log(err)
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!!search) {
      try {
        const result = await API.getGoogleBooks(search)
        setBooks(result?.data?.items || [])
      } catch(err) {
        console.log(err)
      }
    } else {
      alert("Please enter a title or author.")
    }
  };

    return (
    <div>
      <Jumbotron 
        heading="Google Books"
        subhead="Search for and save titles to a reading list"
      />
      <h3 className="blue-text centered">Book Search</h3>
      <SearchForm 
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      
      {books?.map((book) => {
        return (
          <div className="container" key={book.id ? book.id : book.googleBookId}>
          <BookResult 
            id={book.volumeInfo.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book?.volumeInfo?.imageLinks?.thumbnail}
            link={book.volumeInfo.infoLink}
            onClick={() => saveBook(book.id)}
            buttonText="Save"
          />
        </div>
        )
      })}
    </div>
  );
}
export default Search;