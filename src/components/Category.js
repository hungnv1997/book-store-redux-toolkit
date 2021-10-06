import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../redux/slices/categoriesSlice";
import EditCategory from "./EditCategory";
// import { useSelector } from "react-redux";

function Category(props) {
  //state
  const [onEdit, setOnEdit] = useState(false);
  const dispatch = useDispatch();
  // handle onClick delete Btn
  const handleDeleteBtn = () => {
    console.log("delete-------------->");
    dispatch(deleteCategory({ id: props.category.id }));
  };
  const handleClickEditCate = () => {
    setOnEdit(!onEdit);
  };
  return (
    <div className="container mt-3">
      <a href="#" className="row m-3">
        <div className="col-12 p-3 bg-dark text-white d-flex flex-row">
          <div>{props.category.name}</div>
          <button
            className="btn btn-primary ml-5 align-self-end"
            onClick={handleClickEditCate}
          >
            edit
          </button>
          <button
            className="btn btn-danger align-self-end"
            onClick={handleDeleteBtn}
          >
            X
          </button>
        </div>
      </a>
      <div className="row">
        {onEdit && (
          <EditCategory
            id={props.category.id}
            key={props.category.id}
            setOnEdit={setOnEdit}
          />
        )}
      </div>
    </div>
  );
}

export default Category;
