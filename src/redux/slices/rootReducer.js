import booksSlice from "./booksSlice";
import categoriesSlice from "./categoriesSlice";

const rootReducer = {
  books: booksSlice,
  categories: categoriesSlice,
};

export default rootReducer;
