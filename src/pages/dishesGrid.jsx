import React from "react";
import DishCard from "../components/Layouts/dishesCards";
import "./dishesGrid.css";
import { useState } from "react";
import CookingInstructionsPopup from "../components/Layouts/CookingInstructionsPopup";
const DishGrid = ({ dishes }) => {

  const [selectedDish, setSelectedDish] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleShowInstructions = (dish) =>
  {
    console.log("this ran")
    setSelectedDish(dish);
    console.log("THis is the selected instruction")
    console.log(dish.cookingInstructions);
    setPopupOpen(true);
  };
  const handleCloseInstructions = () =>{
    setSelectedDish(null);
    setPopupOpen(false);
  };

  return (
    <div className="dish-grid">
      {dishes.map((dish, index) => (

        <div key={index} className="dish-card-wrapper">
          <DishCard key={index} dish={dish} onShowInstructions = {handleShowInstructions} />
        </div>
      ))}
      <CookingInstructionsPopup
        isOpen={isPopupOpen}
        onClose={handleCloseInstructions}
        selectedDish={selectedDish}
      />
    </div>
  );
};

export default DishGrid;
