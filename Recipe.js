import React, { useState } from "react";
import RecipeDetails from "../components/RecipeDetails";
const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;
  const [show, setShow] = useState(false);
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Click to know details
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
