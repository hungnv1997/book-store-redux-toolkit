import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addCategory } from "../redux/slices/categoriesSlice";
function InputCategory() {
  //state
  const [inputCategory, setInputCategory] = useState("");
  //dispatch
  const dispatch = useDispatch();
  //handle event
  const handleSubmitBtn = () => {
    //get value of state: id , name
    const id = uuidv4();
    const name = inputCategory;
    //dispatch to categories slices
    if (name !== "") {
      alert("Adding category!");
      dispatch(addCategory({ id: id, name: name }));
    } else {
      alert("please insert value");
    }
  };
  const onChangeCategory = (e) => {
    //listen event
    console.log(e.target.value);
    //setState
    setInputCategory(e.target.value);
  };
  return (
    <div className="row">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control mt-3"
          id="floatingPassword"
          placeholder="New Category"
          onChange={(e) => {
            onChangeCategory(e);
          }}
        />
        <label for="floatingPassword">New Category</label>
      </div>
      <button onClick={handleSubmitBtn} className="btn btn-primary w-100">
        Add new Category
      </button>
    </div>
  );
}

export default InputCategory;
