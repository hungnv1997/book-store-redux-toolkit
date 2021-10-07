import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  {
    id: 1,
    name: "Nguyen Van A",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus laboriosam quae blanditiis, esse minima quas accusantium aliquid. Magnam vel corrupti, eveniet nam, temporibus culpa asperiores inventore aliquid, hic enim odio!",
    date: "10/5/2021",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus laboriosam quae blanditiis, esse minima quas accusantium aliquid. Magnam vel corrupti, eveniet nam, temporibus culpa asperiores inventore aliquid, hic enim odio!",
    date: "10/5/2019",
  },
  {
    id: 3,
    name: "Nguyen Van C",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus laboriosam quae blanditiis, esse minima quas accusantium aliquid. Magnam vel corrupti, eveniet nam, temporibus culpa asperiores inventore aliquid, hic enim odio!",
    date: "10/5/207",
  },
];
export const reviewsSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.unshift(action.payload);
    },
    deleteReview: (state, action) => {
      return state.filter((review) => {
        return review.id !== action.payload.id;
      });
    },
    editReview: (state, action) => {
      return state.map((review) => {
        if (review.id == action.payload.id) {
          return {
            id: review.id,
            name: review.name,
            review: action.payload.review,
            date: review.date,
          };
        } else {
          return review;
        }
      });
    },
  },
});
export const { addReview, deleteReview, editReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
