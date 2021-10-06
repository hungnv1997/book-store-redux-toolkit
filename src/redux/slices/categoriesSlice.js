import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  { id: 1, name: "math" },
  { id: 2, name: "history" },
];
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    deleteCategory: (state, action) => {
      console.log("delete category payload", action.payload);
      return state.filter((category) => {
        return category.id !== action.payload.id;
      });
    },
    editCategory: (state, action) => {
      // console.log("edit category", action.payload);
      return state.map((category) => {
        if (category.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
          };
        } else {
          return category;
        }
      });
    },
  },
});
export const { addCategory, deleteCategory, editCategory } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
