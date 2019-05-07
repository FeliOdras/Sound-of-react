import React from "react";

const SearchBar = props => {
  return (
    <input
      className="border-0 ml-1"
      value={props.searchTerm}
      onChange={props.onSearchInputChangeHandler}
      placeholder="Search to find music"
    />
  );
};

export default SearchBar;
