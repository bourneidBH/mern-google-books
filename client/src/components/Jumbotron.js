import React from "react";
import Background from "./book.jpg"

function Jumbotron(props) {
    const {heading, subhead} = props;
    const style = { 
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }

    return (
        <div className="banner" style={style}>
            <div className="centered white-text">
                <h1 className="text-shadow">{heading}</h1>
                <h5 className="text-shadow">{subhead}</h5>
            </div>
        </div>
    )
}

export default Jumbotron;