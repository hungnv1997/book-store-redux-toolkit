import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCategory } from "../redux/slices/categoriesSlice";

function EditCategory(props) {
  //props
  const setOnEdit = (boolean) => {
    console.log("Set onedit");
    props.setOnEdit(boolean);
  };
  //useDispatch
  const dispatch = useDispatch();
  // State
  const [inputValue, setInputValue] = useState("");
  // handle change category
  const onChangeInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleClickClose = () => {
    setOnEdit(false);
  };
  const handleClickApply = () => {
    //check

    if (inputValue !== "") {
      //dispatch
      alert("Successful change!");
      setOnEdit(false);
      dispatch(editCategory({ id: props.id, name: inputValue }));
    } else {
      alert("please insert the value");
    }
  };
  return (
    <div>
      <div className="form-floating mt-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Name"
          onChange={(e) => {
            onChangeInput(e);
          }}
        />
        <label for="floatingInput">Change category</label>
        <button className="btn btn-danger" onClick={handleClickClose}>
          X
        </button>
      </div>
      <button className="btn btn-success" onClick={handleClickApply}>
        APPLY
      </button>
    </div>
  );
}

export default EditCategory;
