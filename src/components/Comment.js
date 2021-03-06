import React from "react";

export function starGen(rating) {
  let ratingHTML = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratingHTML += `★`;
    } else {
      ratingHTML += `☆`;
    }
  }
  return ratingHTML;
}
function Comment({ review }) {
  return (
    <div className="app__comments__comment">
      <h2>{review.name}</h2>
      {starGen(review.rating)}
      <p>{review.comment}</p>
    </div>
  );
}

export default Comment;
