import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeBook, editBook } from "../redux/slices/booksSlice";

function Book(props) {
  //state
  const [onEdit, setOnEdit] = useState(false);
  const [newNameBook, setNewNameBook] = useState("");
  const [newDesBook, setNewDesBook] = useState("");
  const [newCategory, setNewCategory] = useState("");
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
        editBook({
          id: index,
          name: newNameBook,
          description: newDesBook,
          category: newCategory,
        })
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
  const handleSelect = (event) => {
    setNewCategory(event.target.value);
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
        <h2>Category: {book.category}</h2>
        <h2 className="text-muted">{book.description}</h2>

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
            <label for="floatingInput">Change name</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
              onChange={(e) => {
                onChangeDesBook(e);
              }}
            />
            <label for="floatingInput">Change description</label>
          </div>
          <select
            className="form-select mt-3"
            aria-label="Default select example"
            onChange={(e) => handleSelect(e)}
          >
            <option selected></option>
            <option value="Chemistry">Chemistry</option>
            <option value="Math">Math</option>
            <option value="History">History</option>
          </select>
          <button className="btn btn-success mt-3" onClick={handleSubmitEdit}>
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
