import React from "react";
import { useSelector } from "react-redux";
import Review from "./Review";

function ReviewsC() {
  const reviews = useSelector((state) => state.reviews);
  console.log("reviews", reviews);
  return (
    <div className="container">
      {reviews.length !== null &&
        reviews.map((review) => {
          console.log("AFTER PROPS __________________>", review);
          return <Review review={review} key={review.id} />;
        })}
    </div>
  );
}

export default ReviewsC;
