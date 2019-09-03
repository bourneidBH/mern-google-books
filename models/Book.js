const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    googleBookId: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    authors: [{
        type: String,
        required: true
    }],
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default: false
    }

});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
