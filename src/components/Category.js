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
    <div className="col-4 m-2">
      <div className="">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title">Category</h6>
            <h5 className="card-subtitle my-3">
              {props.category.name.toUpperCase()}
            </h5>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-primary btn-sm m-2 align-self-end"
              onClick={handleClickEditCate}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm align-self-end"
              onClick={handleDeleteBtn}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className=" card m-2">
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
