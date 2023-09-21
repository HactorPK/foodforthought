import React from "react";
import "./dishCard.css";

const DishCard = ({ dish }) => {
  const {
    name,
    category,
    healthRating,
    totalCookTime,
    ingredients,
    imageSrc,
  } = dish;

  let truncatedIngredients = ingredients;
  if (ingredients.split(" ").length > 6) {
    const ingredientWords = ingredients.split(" ");
    truncatedIngredients = ingredientWords.slice(0, 6).join(" ") + "...";
  }

  return (
    <div className="dish-card">
      <div className="dish-image">
        <img src={imageSrc} alt={name} className="image" />
      </div>
      <div className="dish-info">
        <div className="prep-info">
          <p>
            <strong>Dish name:</strong> {name}
          </p>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Health rating:</strong> {healthRating}
          </p>
          <p>
            <strong>Total Cook Time:</strong> {totalCookTime} min
          </p>
          <p>
            <strong>Ingredients:</strong> {truncatedIngredients}
          </p>
        </div>
        <div className="button-wrap">
          <button className="next-button">Get Cooking</button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
