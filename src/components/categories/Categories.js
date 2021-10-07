import React from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import Category from "./Category";

function Categories() {
  const categories = useSelector((state) => state.categories);
  // console.log("--------------->", categories);
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-item-center">
        {categories.map((category) => {
          return <Category category={category} key={category.id} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
