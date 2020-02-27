import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "./styles.css";

export default function SearchBox() {
  return (
    <div className="search-box">
      <SearchIcon />
      <input placeholder='Experimente "Nova York"' />
    </div>
  );
}
