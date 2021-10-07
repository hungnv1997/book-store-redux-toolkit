import React from "react";
import InputReview from "../components/reviews/InputReview";
import ReviewsC from "../components/reviews/ReviewsC";
// import reviewsSlice from '../redux/slices/reviewsSlice'

function Reviews() {
  return (
    <div>
      <InputReview />
      <ReviewsC />
    </div>
  );
}

export default Reviews;
