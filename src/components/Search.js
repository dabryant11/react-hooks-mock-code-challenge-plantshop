import React from "react";

function Search({ setSearchQuery, searchQuery }) {
  console.log(searchQuery);
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        // value={search}
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
