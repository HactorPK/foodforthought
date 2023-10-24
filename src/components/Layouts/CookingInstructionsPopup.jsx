import React from "react";
import Modal from "react-modal";
import "./CookingInstructionsPopup.css";

const CookingInstructionsPopup = ({ isOpen, onClose, selectedDish }) => {
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
          {typeof selectedDish.ingredients === "string" && (
            <div className="popup-ingredients-div">
              <h3>Ingredients:</h3>
              <p className="popup-ingredients">{selectedDish.ingredients}</p>
            </div>
          )}
          <div className="popup-instructions-div">
            <h3>Cooking Instructions:</h3>
            <p className="popup-instructions">
              {selectedDish.cookingInstructions
                .split("\n")
                .map((step, index) => (
                  <span key={index}>
                    {step}
                    <br />
                  </span>
                ))}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CookingInstructionsPopup;
