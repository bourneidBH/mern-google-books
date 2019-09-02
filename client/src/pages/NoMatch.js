import React from "react";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
    return(
        <Jumbotron 
            heading="Sorry! Page not found."
            subhead="Click the search icon to try again."
        />
    );
};

export default NoMatch;

