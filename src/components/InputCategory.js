import React from "react";

function InputCategory() {
  return (
    <div className="container">
      <form className="row">
        <div className="form-floating">
          <input
            type="text"
            className="form-control mt-3"
            id="floatingInput"
            placeholder="Name"
            // onChange={(e) => {
            //   onChangeNameInput(e);
            // }}
          />
          <label for="floatingInput">Name category</label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary mt-3"
          type="submit"
          //   onClick={(e) => {
          //     handleSubmit(e);
          //   }}
        >
          Search category
        </button>
      </form>
    </div>
  );
}

export default InputCategory;
