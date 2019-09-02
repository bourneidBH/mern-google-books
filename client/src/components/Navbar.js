import React from "react";

function Navbar() {
    return (
    <nav>
        <div className="nav-wrapper z-depth-2">
            <a href="/" className="brand-logo center">Google Books</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="/search"><i className="material-icons">search</i></a></li>
                <li><a href="/saved">Saved</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;