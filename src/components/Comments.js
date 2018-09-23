import React from "react";
import Comment from "./Comment";

function Comments({ reviews }) {
  return (
    <div className="app__comments">
      {reviews.map((review, index) => {
        return <Comment key={index} review={review} />;
      })}
    </div>
  );
}

export default Comments;
