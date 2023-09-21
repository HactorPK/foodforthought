import React from "react";
import DishGrid from "./dishesGrid.jsx";
import IMAGES from "../images";
import Header from "../header/header.jsx";
import "./dishes.css";

const Dishes = () => {
  const sampleDishes = [
    {
      name: "Spaghetti Carbonara",
      category: "Vegan diet",
      healthRating: 5,
      totalCookTime: 30,
      ingredients: "Pasta, Eggs, Pancetta, Parmesan, Salt, Pepper",
      imageSrc: IMAGES.spaghetti,
    },
    {
      name: "Lasagna",
      category: "Vegetarian diet",
      healthRating: 4.5,
      totalCookTime: 25,
      ingredients: "Pasta, Eggs, Pancetta, Parmesan, Salt, Pepper",
      imageSrc: IMAGES.lasagna,
    },
    {
      name: "Lasagna",
      category: "Meat",
      healthRating: 3,
      totalCookTime: 25,
      ingredients: "Pasta, Eggs, Pancetta, Parmesan, Salt, Pepper",
      imageSrc: IMAGES.handDough,
    },
    {
      name: "Lasagna",
      category: "Lactose Intolerant",
      healthRating: 4,
      totalCookTime: 25,
      ingredients: "Pasta, Eggs, Pancetta, Parmesan, Salt, Pepper",
      imageSrc: IMAGES.lasagna,
    },
    {
      name: "Lasagna",
      category: "Vegan diet",
      healthRating: 3.7,
      totalCookTime: 25,
      ingredients: "Pasta, Eggs, Pancetta, Parmesan, Salt, Pepper",
      imageSrc: IMAGES.lasagna,
    },
    {
      name: "Lasagna",
      category: "Meat",
      healthRating: 4.2,
      totalCookTime: 25,
      ingredients: "Pasta, Eggs, Pancetta, Parmesan, Salt, Pepper",
      imageSrc: IMAGES.lasagna,
    },
    {
      name: "Lasagna",
      category: "Vegeterian diet",
      healthRating: 5,
      totalCookTime: 25,
      ingredients: "Pasta, Eggs, Pancetta, Parmesan, Salt, Pepper",
      imageSrc: IMAGES.lasagna,
    },
    {
      name: "Lasagna",
      category: "Vegeterian diet",
      healthRating: 3,
      totalCookTime: 25,
      ingredients: "Pasta, Eggs, Pancetta, Parmesan, Salt, Pepper",
      imageSrc: IMAGES.lasagna,
    },
    {
      name: "Lasagna",
      category: "Vegan diet",
      healthRating: 5,
      totalCookTime: 25,
      ingredients: "Pasta, Eggs, Pancetta, Parmesan, Salt, Pepper",
      imageSrc: IMAGES.lasagna,
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-div">
        <div className="page-title">
          <p className="title-text">
            These are the recipes you could use, get cooking!
          </p>
        </div>
        <DishGrid dishes={sampleDishes} />
      </div>
    </div>
  );
};

export default Dishes;
