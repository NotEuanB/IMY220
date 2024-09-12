import React from "react";

class SearchInput extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="search">Enter search term</label>
                <input id="search" placeholder="Enter search term here..." type="text"/>
                <button type="submit">Search</button>
            </div>
        );
    }
};

export default SearchInput;