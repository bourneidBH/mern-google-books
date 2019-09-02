import React from "react";

function SearchForm (props) {

        return(
            <div className="container">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <input 
                            placeholder="Book Title" 
                            id="title" 
                            type="text" 
                            name="bookSearch" 
                            value={props.search}
                            onChange={props.handleInputChange} 
                        />
                        <label for="title">Search for a title</label>
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