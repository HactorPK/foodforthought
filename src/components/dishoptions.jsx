import React from "react";
import DishCard from "./Layouts/dishesCards";

const sampleDish = {
  name: "Spaghetti Carbonara",
  allergies: "None",
  totalCookTime: 30,
  ingredients:
    "Pasta, Eggs, Pancetta, Parmesan, Salt, Pepper, macoroni, cheese, water, pine",
  imageSrc: "./cabbage.jpg",
};

const DisplayDishes = () => {
  return <DishCard dish={sampleDish} />;
};

export default DisplayDishes;
