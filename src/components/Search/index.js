import React from "react";
import "./style.css";

const Search = () => {
  return (
    <div className="searchBox">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          // onChange=
        />
        <button className="btn my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;
