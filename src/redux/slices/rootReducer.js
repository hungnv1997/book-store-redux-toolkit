import booksSlice from "./booksSlice";
import categoriesSlice from "./categoriesSlice";
import reviewsSlice from "./reviewsSlice";

const rootReducer = {
  books: booksSlice,
  categories: categoriesSlice,
  reviews: reviewsSlice,
};

export default rootReducer;
