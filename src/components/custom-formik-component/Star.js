import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const renderStar = isFull => {
  const icon = isFull ? faStar : regularStar;
  return <FontAwesomeIcon icon={icon} size="lg" />;
};

const Star = ({ isFull, onClick }) => (
  <span onClick={onClick}>
    {renderStar(isFull)}
  </span>
);

export default Star;
