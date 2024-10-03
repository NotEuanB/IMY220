import React, { useState } from "react";

const SearchInput = ({ onSearchResults }) => {
    const [term, setTerm] = useState("");
    const [type, setType] = useState("playlists"); // Default search type

    const handleInputChange = (event) => {
        setTerm(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted with term:", term, "and type:", type); // Debugging log
        try {
            const response = await fetch(`/api/search?term=${term}&type=${type}`);
            const data = await response.json();
            console.log("Search results:", data); // Debugging log
            onSearchResults(data, type);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Enter search term</label>
                <input
                    id="search"
                    placeholder="Enter search term here..."
                    type="text"
                    value={term}
                    onChange={handleInputChange}
                />
                <label htmlFor="type">Select search type</label>
                <select id="type" value={type} onChange={handleTypeChange}>
                    <option value="playlists">Playlists</option>
                    <option value="songs">Songs</option>
                    <option value="users">Users</option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchInput;