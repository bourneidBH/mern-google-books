import React from "react";
import BookResult from "./BookResult";

function BookList() {
    
    return (
        <div className="container">
            
            <BookResult 
            id={id}
            title={title}
            authors={authors}
            description={description}
            link={link}
            image={image}
            />
        </div>
    )
    
}

export default BookList;