import React from "react";
import Books from "../components/books/Books";
import AddBook from "../components/books/AddBook";

function HomePage() {
  return (
    <div>
      <AddBook />
      <Books />
    </div>
  );
}

export default HomePage;
