import axios from 'axios';

export default {
  getGoogleBooks: function (bookTitle) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`)
  },

  saveBook: function (bookData) {
    return axios.post('/saved', bookData);
  },

  getBookshelf: function () {
    return axios.get('/saved')
  },

  deleteBook: function (id) {
    return axios.delete(`/saved/${id}`)
  }
};
