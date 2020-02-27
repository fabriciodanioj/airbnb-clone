import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "./styles.css";

export default function ExploreCard() {
  return (
    <div className="explore-card">
      <SearchIcon />
      <h1>América do Sul</h1>
      <h2>Aventuras experiências</h2>
    </div>
  );
}
