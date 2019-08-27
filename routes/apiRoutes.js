const axios = require("axios");
const router = require("express").Router();
const config = require("../config/config")

router.get("/books", (req, res) => {
    axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + {params: req.query} + "&key=" + config)
        .then( ( {data: {results}} ) => res.json(results) )
        .catch(err => console.log(err))
});

module.exports = router;