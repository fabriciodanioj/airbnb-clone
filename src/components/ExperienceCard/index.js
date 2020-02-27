import React from "react";

import "./styles.css";

export default function ExperienceCard({ image, country, title, price }) {
  return (
    <div className="experience-card">
      <img src={image} alt="" />
      <h1>{country}</h1>
      <h2>{title}</h2>
      <p>A partir de R${price}/pessoa</p>
    </div>
  );
}
