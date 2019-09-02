import React from "react";

function BookResult(props) {

    return (
        <div className="container">
            {props.books.map(book => (
            <article id={book._id} key={book._id ? book._id : book.googleBookId}>
 
                    <img src={book.image} alt={book.title} className="thumbnail" />
                    <h5>Title: {book.title}</h5>
                    <p>By: {book.authors.join(', ')}</p>
                    <p>{book.description}</p>
                    <a href={book.link} target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">View</button></a>
                    <button 
                        className="btn waves-effect waves-light" 
                        onClick={props.onClick}
                        id={book._id ? book._id : book.googleBookId}
                    >{props.buttonText}</button>

            </article>
            ))}
        </div>
    );
};

export default BookResult;