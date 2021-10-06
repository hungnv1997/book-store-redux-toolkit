import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";

function CategoriesC() {
  const categories = useSelector((state) => state.categories);
  console.log("--------------->", categories);
  return (
    <div className="container-fluid">
      <div className="row">
        {categories.map((category) => {
          return <Category category={category} key={category.id} />;
        })}
      </div>
    </div>
  );
}

export default CategoriesC;
