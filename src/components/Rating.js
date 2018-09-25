import React from "react";

function Rating({ rating, ratingReceiver }) {
  function handleHover(event) {
    const hovered = event.target.id;

    for (let i = 1; i <= 5; i++) {
      const star = document.getElementById(i);
      if (i <= hovered) {
        star.innerText = "★";
      } else {
        star.innerText = "☆";
      }
    }
  }

  function handleLeave() {
    if (rating === null) {
      const stars = document.querySelectorAll(".star");

      stars.forEach(star => (star.innerText = "☆"));
    } else {
      for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(i);
        if (i <= rating) {
          star.innerText = "★";
        } else {
          star.innerText = "☆";
        }
      }
    }
  }

  function handleClick(event) {
    const currentRating = event.target.id;
    ratingReceiver(currentRating);
  }

  return (
    <div id="app__form__rating">
      <span
        className="star"
        id="1"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        ☆
      </span>
      <span
        className="star"
        id="2"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        ☆
      </span>
      <span
        className="star"
        id="3"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        ☆
      </span>
      <span
        className="star"
        id="4"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        ☆
      </span>
      <span
        className="star"
        id="5"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        ☆
      </span>
    </div>
  );
}

export default Rating;
