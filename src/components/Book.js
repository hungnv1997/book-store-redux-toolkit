import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeBook, editBook } from "../redux/slices/booksSlices";

function Book(props) {
  //state
  const [onEdit, setOnEdit] = useState(false);
  const [newNameBook, setNewNameBook] = useState("");
  const [newDesBook, setNewDesBook] = useState("");
  //props
  const book = props.book;
  const index = book.id;
  //dispatch
  const dispatch = useDispatch();
  //handle button
  const handleEditBook = () => {
    console.log("Click edit");
    //change state edit
    setOnEdit(!onEdit);
  };
  const handleSubmitEdit = () => {
    console.log("Handle submit");
    if (newNameBook !== "" && newDesBook !== "") {
      //dispatch edit book
      dispatch(
        editBook({ id: index, name: newNameBook, description: newDesBook })
      );
      //setOnEdit(false)
      setOnEdit(false);
    } else {
      alert("Please insert the value");
    }
  };
  //handle input
  const onChangeNameBook = (event) => {
    setNewNameBook(event.target.value);
    console.log(event.target.value);
  };
  const onChangeDesBook = (event) => {
    setNewDesBook(event.target.value);
    console.log(event.target.value);
  };
  //_____________________RETURN___________________
  return (
    <div className="row col-4 m-5">
      <div className="">
        <h1>
          <span className="m-2">{book.name}</span>
          <button
            className="btn btn-danger ml-3"
            onClick={() => dispatch(removeBook({ id: index }))}
          >
            Delete
          </button>
        </h1>
        <h2>{book.description}</h2>

        <button className="btn btn-primary" onClick={handleEditBook}>
          Edit
        </button>
      </div>
      {onEdit ? (
        <div className="edit-overlay">
          <h1>
            Edit book {book.name}{" "}
            <button
              className="btn btn-danger"
              onClick={() => {
                setOnEdit(false);
                console.log("click editbook", onEdit);
              }}
            >
              X
            </button>
          </h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
              onChange={(e) => {
                onChangeNameBook(e);
              }}
            />
            <label for="floatingInput">Change book name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
              onChange={(e) => {
                onChangeDesBook(e);
              }}
            />
            <label for="floatingInput">Change Book Description</label>
          </div>
          <button className="btn btn-success" onClick={handleSubmitEdit}>
            {" "}
            Submit
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Book;
