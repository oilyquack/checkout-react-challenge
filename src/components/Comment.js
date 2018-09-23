import React from "react";

function Comment({ review }) {
  return (
    <div className="app__comments__comment">
      <h2>{review.name}</h2>
      <p>{review.comment}</p>
    </div>
  );
}

export default Comment;
