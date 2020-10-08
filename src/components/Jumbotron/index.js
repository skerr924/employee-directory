import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron bg-dark text-white">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">
        Search below or click on "Name" to search alphabetically by name.
      </p>
    </div>
  );
}

export default Jumbotron;
