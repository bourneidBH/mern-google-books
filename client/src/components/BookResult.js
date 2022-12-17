import React from "react";

function BookResult(props) {

    const { id, title, image, authors, description, link, onClick, buttonText} = props;
    const authorText = authors?.length > 1 ? authors.join(" | ") : authors

    return (

        <article id={id}>
            {image && <img src={image} alt={title} className="thumbnail" />}
            <h5>{title}</h5>
            <p>By: {authorText}</p>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer"><button className="btn waves-effect waves-light">View</button></a>
            <button 
                className="btn waves-effect waves-light modal-trigger" 
                onClick={onClick}
                data-id={id}
            >{buttonText}</button>

        </article>
    )}

export default BookResult;