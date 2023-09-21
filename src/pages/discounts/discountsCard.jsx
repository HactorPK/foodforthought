import React from "react";
import "./discountsCard.css";

const DiscountsCard = ({ discount }) => {
  const {
    productImage,
    productName,
    productPrice,
    discountPercentage,
  } = discount;

  return (
    <div className="container-div">
      <div className="product-card">
        <div className="discount-image">
          <img src={productImage} alt={productName} className="image" />
        </div>
        <div className="product-details">
          <p>
            <strong>{productName}</strong>
          </p>
          <p>
            <strong>Price:</strong>${productPrice}
          </p>
          <div className="discount">{discountPercentage}% OFF</div>
        </div>
      </div>
    </div>
  );
};

export default DiscountsCard;
