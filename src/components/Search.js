import React from "react";

function Search({ search, handleSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          type="text"
          id="search"
          placeholder="Search for Pokémon..."
          value={search}
          onChange={handleSearch}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
