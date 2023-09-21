import React from "react";
import DishCard from "../components/Layouts/dishesCards";
import "./dishesGrid.css";

const DishGrid = ({ dishes }) => {
  return (
    <div className="dish-grid">
      {dishes.map((dish, index) => (
        <div key={index} className="dish-card-wrapper">
          <DishCard dish={dish} />
        </div>
      ))}
    </div>
  );
};

export default DishGrid;
