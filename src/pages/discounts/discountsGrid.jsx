import React from "react";
import DiscountsCard from "./discountsCard";
import './discountsGrid.css'

const DiscountGrid = ({ discounts }) => {
  return (
    <div className="discount-grid">
      {discounts.map((discount, index) => (
        <div key={index} className="discount-card-wrapper">
          <DiscountsCard discount={discount} />
        </div>
      ))}
    </div>
  );
};

export default DiscountGrid;
