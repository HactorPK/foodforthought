import React from "react";
import DiscountGrid from "./discountsGrid";
import IMAGES from "../../images";
import Header from "../../header/header";
import "./discounts.css";

const Discounts = () => {
  // Sample product data
  const productData = [
    {
      productImage: IMAGES.uphuthu,
      productName: "Uphuthu",
      productPrice: 36,
      discountPercentage: 20,
    },
    {
      productImage: IMAGES.lasagna,
      productName: "Lasagna",
      productPrice: 66.99,
      discountPercentage: 5,
    },
    {
      productImage: IMAGES.spaghetti,
      productName: "Spaghetti",
      productPrice: 29.99,
      discountPercentage: 15,
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-div">
        <DiscountGrid discounts={productData} />
      </div>
    </div>
  );
};

export default Discounts;
