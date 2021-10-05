import React from "react";
import { useSelector } from "react-redux";

function Category() {
  const books = useSelector((state) => state.books);
  console.log("Category", books);
  return (
    <div className="container mt-3">
      <a className="row m-3">
        <div className="col-12 p-3 bg-dark text-white">Chemistry</div>
      </a>
      <a className="row m-3">
        <div className="col-12 p-3 bg-dark text-white">Math</div>
      </a>

      <a className="row m-3">
        <div className="col-12 p-3 bg-dark text-white">History</div>
      </a>
    </div>
  );
}

export default Category;
