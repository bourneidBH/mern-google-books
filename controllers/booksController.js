const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbBooks => res.json(dbBooks))
      .catch(err => console.log(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbBook => dbBook.remove())
      .then(dbBooks => res.json(dbBooks))
      .catch(err => console.log(err));
  }
};
