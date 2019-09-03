import React from "react";

function SearchForm (props) {

    return(
        <div className="container">
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <input 
                        placeholder="Book title or author" 
                        id="bookSearch" 
                        type="text" 
                        name="bookSearch" 
                        value={props.search}
                        onChange={props.handleInputChange} 
                    />
                    <label htmlFor="bookSearch">Search for a book title or author</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={props.handleFormSubmit}>Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
        </div>
    );

};

export default SearchForm;