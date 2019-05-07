import React from "react";

const SearchBar = props => {
  return (
    <input
      className="ml-1 bg-transparent font-amatic border-bottom-2 border-left-0 border-right-0 border-top-0 border-dark text-center"
      value={props.searchTerm}
      onChange={props.onSearchInputChangeHandler}
      placeholder="Enter your search term"
    />
  );
};

export default SearchBar;
