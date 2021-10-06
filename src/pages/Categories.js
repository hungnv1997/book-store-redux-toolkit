import React, { useState } from "react";
import { useSelector } from "react-redux";
import CategoriesC from "../components/CategoriesC";
// import Categories from "../components/CategoriesC";
import InputCategory from "../components/InputCategory";

function Categories() {
  return (
    <div className="container">
      <InputCategory />
      <CategoriesC />
    </div>
  );
}

export default Categories;
