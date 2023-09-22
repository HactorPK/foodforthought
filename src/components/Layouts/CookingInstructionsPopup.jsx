import React from "react";
import Modal from "react-modal";
import "./CookingInstructionsPopup.css";
console.log("cooking instruction popup running");
const CookingInstructionsPopup = ({ isOpen, onClose, selectedDish }) => {
  if (selectedDish) {
    console.log(selectedDish.cookingInstructions);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Cooking Instructions"
      style={{
        content: {
          width: "500px", // Set the desired width
          height: "300px", // Set the desired height
          margin: "auto", // Center the modal
          backgroundColor: "rgba(95, 102, 102, 0.3)",
        },
      }}
    >
      {selectedDish && (
        <div className="popup-modal">
          <div className="popup-title-div">
            <h2 className="popup-title">
              {selectedDish.name} Cooking Instructions
            </h2>
          </div>
          <div className="popup-instructions-div">
            <p className="popup-instructions">
              {selectedDish.cookingInstructions}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CookingInstructionsPopup;
