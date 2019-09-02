const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
    googleBookId: {
        type: String,
        required: true
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

module.exports = Book;
