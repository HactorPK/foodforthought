import React from "react";
import DishGrid from "./dishesGrid.jsx";
import IMAGES from "../images";
import Header from "../header/header.jsx";
import "./dishes.css";
import { useLocation } from "react-router-dom";
const reformatResponseData = (responseData) => {
  const reformattedDishes = [];
  for (const key in responseData) {
    if (responseData.hasOwnProperty(key)) {
      const dishData = responseData[key];
      const reformattedDish = {
        name: dishData.name,
        category: dishData.category,
        healthRating: dishData.healthRating,
        totalCookTime: parseInt(dishData.totalCookTime),
        ingredients: dishData.ingredients,
        imageSrc: IMAGES[`${dishData.name}`],
        cookingInstructions: dishData.cookingInstructions,
      };
      reformattedDishes.push(reformattedDish);
    }
  }

  return reformattedDishes;
};

const Dishes = () => {
  const location = useLocation();
  const receivedData = location.state && location.state.data;
  const reformattedData = reformatResponseData(receivedData);
  console.log(reformattedData);
  return (
    <div>
      <Header />
      <div className="container-div">
        <div className="page-title">
          <p className="title-text">
            These are the recipes you could use, get cooking!
          </p>
        </div>
        <DishGrid dishes={reformattedData} />
      </div>
    </div>
  );
};

export default Dishes;
