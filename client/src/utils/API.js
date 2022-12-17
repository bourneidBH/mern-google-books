import axios from 'axios';

const API = {
  // get book data from api
  getGoogleBooks: search => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${search}&max-results=10`);
  },

  // save book to database
  saveBook: bookData => {
    return axios.post('/api/books', bookData);
  },

  // get all saved books
  getSavedBooks: () => {
    return axios.get('/api/books')
  },

  //get specific saved book by id
  getBook: id => {
    return axios.get(`/api/books/${id}`)
  },

  // delete specific book id book from saved books
  deleteBook: id => {
    return axios.delete(`/api/books/${id}`)
  }
};

export default API