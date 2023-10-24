import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/landingPage";
import Dishes from "../pages/dishes";
import Discounts from "../pages/discounts/discounts.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/recipes" element={<Dishes />} />
      <Route path="/discounts" element={<Discounts />} />
    </Routes>
  );
}

export default AppRouter;
