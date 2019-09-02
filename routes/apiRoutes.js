const router = require("express").Router();
const booksController = require("../controllers/booksController");

// Matches with '/search'
router
    .route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// Matches with '/saved/:id'
router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;
