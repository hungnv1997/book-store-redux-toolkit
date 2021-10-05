import React from "react";
import Book from "./Book.js";
import { useSelector } from "react-redux";

function Books() {
  const books = useSelector((state) => state);

  return (
    <div className="container-fluid">
      <div className="row">
        {books.books.map((book) => {
          return <Book book={book} key={book.id} />;
        })}
      </div>
    </div>
  );
}

export default Books;
