import React from "react";

function BookResult(props) {

    const { id, title, image, authors, description, link, onClick, buttonText} = props;

    return (

        <article id={id}>
            <img src={image} alt={title} className="thumbnail" />
            <h5>{title}</h5>
            <p>By: {authors}</p>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">View</button></a>
            <button 
                className="btn waves-effect waves-light" 
                onClick={onClick}
                data-id={id}
            >{buttonText}</button>

        </article>
    )}

export default BookResult;