import React from "react";
import SearchBar from "../SearchBar";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">Sort by name or search below.</p>
      <SearchBar />
    </div>
  );
}

export default Jumbotron;
