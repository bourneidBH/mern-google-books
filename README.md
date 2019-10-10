# Google Books Search

This full stack MERN app allows users to search for books and save them to a reading list. Books can also be deleted from the list.

**Deployed App:** https://stormy-mountain-77179.herokuapp.com/

## Getting started:
This full-stack React app has two package.json files, one in the root directory and one in the client folder. To start a development server, clone the repo and then run npm install from both the root and client. Then start up MongoDB by running the command mongod in a new terminal window. Run npm start to start the development server.

### Prerequisites:
* Install MongoDB: https://www.mongodb.com/download-center#community and configure according to the directions for your operating system.
* Sign up for a Google Books API key: https://console.developers.google.com/apis/credentials 

## Technologies used:
* MonogDB/Mongoose
* Express
* React/React Router
* Node.JS
* Google Books API
* Materialize

## How it works:
* Submitting the search form on the home page triggers a GET route to the Google Books API.
* Search results are displayed using a map function.
* Clicking the "Save" button triggers a POST route to save the book to the MongoDB database.
* Clicking the "View" button loads the book page on the Google Books website.
* The "Saved" page runs a GET route function to get all books saved in the database and displays the results using a map function.
* Clicking "Delete" runs a DELETE route to remove the book from the database. 
* Changing pages between search and saved is handled with react-router-dom switch.
* Both the "Search" and "Saved" pages use the same components with different banner text, button text, and button functions passed to the component as props.

## Deployment
* Run npm run build
* To deploy on Heroku run heroku create
* On your Heroku account dashboard, find the app and add-on mLab Mongo
* In the mLab dashboard add a database user
* In you terminal run git push heroku master 

<img src="client/public/images/google-books-search.jpg" alt="home page" />


<img src="client/public/images/google-books-saved.jpg" alt="aved books page" />

