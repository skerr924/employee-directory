import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron bg-dark text-white">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">
        Search by name, gender, or email in the search bar below, or sort by
        first or last name using the arrow keys.
      </p>
    </div>
  );
}

export default Jumbotron;
