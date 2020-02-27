import React from "react";

import "./styles.css";

export default function CategoriesCards({ image, text }) {
  return (
    <div className="categories-cards">
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
}
