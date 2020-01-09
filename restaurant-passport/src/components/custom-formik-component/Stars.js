import React from "react";
import Star from "./Star";


const Stars = ({ count, handleClick }) => (
  <span >
    {[...Array(5).keys()].map(i => (
      <Star key={i} isFull={i < count} onClick={() => handleClick(i + 1)} />
    ))}
  </span>
);

Stars.defaultProps = {
  count: 1,
  handleClick: e => e
};

export default Stars;