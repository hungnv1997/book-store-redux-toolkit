import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
let initialState = [
  {
    id: 1,
    name: "Book 1",
    description: "Note that the development build is not optimized",
    category: "Math",
  },
  {
    id: 2,
    name: "Book 2",
    description: "Note that the development build is not optimized",
    category: "Chemistry",
  },
  {
    id: 3,
    name: "Book 3",
    description: "Note that the development build is not optimized",
    category: "history",
  },
];

export const booksSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      //const newUser = { id: 2, name: action.name, age: action.age };

      return state;
    },
    addBook: (state, { payload }) => {
      state.push(payload);
    },
    removeBook: (state, action) => {
      return state.filter((book) => {
        if (book.id !== action.payload.id) return book;
      });
      // console.log("delete State", state);
      // console.log("remove book", newDeleteState);
      // state = newDeleteState;
      // console.log("payloaddddd________________________", payload);
    },
    editBook: (state, { payload }) => {
      return state.map((book) => {
        if (book.id === payload.id) {
          return {
            id: payload.id,
            name: payload.name,
            description: payload.description,
          };
        } else return book;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUsers, addBook, removeBook, editBook } = booksSlice.actions;

export default booksSlice.reducer;
