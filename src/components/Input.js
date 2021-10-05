import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../redux/slices/booksSlices";

function Input() {
  //state
  let [nameInput, setNameInput] = useState("");
  let [desInput, setDesInput] = useState("");
  // dispatch
  const dispatch = useDispatch();

  //   (id, name, des) => dispatch(addBook(id, name, des));
  //Add
  const handleSubmit = (event) => {
    event.preventDefault();

    const id = uuidv4();
    const name = nameInput;
    const des = desInput;
    // ADD book
    if (name !== "" && des !== "") {
      dispatch(addBook({ id: id, name: name, description: des }));
      alert("You added a new book!");
    } else alert("Please insert value");
    console.log("_____________________________________");
  };

  const handleClickAddButton = () => {
    const name = nameInput;
    console.log("text", name);
    // addTodo(text,id)
    // setUserInput('')
  };
  const onChangeNameInput = (event) => {
    setNameInput(event.target.value);
    console.log(event.target.value);
  };
  const onChangeDesInput = (event) => {
    setDesInput(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="row mb-5">
          <form>
            <h1 className="h3 mb-3 fw-normal">Add new book</h1>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                onChange={(e) => {
                  onChangeNameInput(e);
                }}
              />
              <label for="floatingInput">Name of Book</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="Description"
                onChange={(e) => {
                  onChangeDesInput(e);
                }}
              />
              <label for="floatingPassword">Description</label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary mt-3"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Add new Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Input;
