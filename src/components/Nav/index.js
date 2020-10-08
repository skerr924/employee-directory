import React from "react";
import "./style.css";
import Search from "../Search";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Employee Directory
      </a>
      <div className="search-area col-4">
        <Search />
      </div>
    </nav>
  );
}

export default Nav;
