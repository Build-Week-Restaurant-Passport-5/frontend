import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Card } from "semantic-ui-react";

import RestaurantCard from "./RestaurantCard";

const RestaurantList = props => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Steak House",
      address: "123 Main St",
      city: "San Francisco",
      zipcode: "91234",
      phoneNumber: "555-01234",
      websiteURL: "http://www.harrisrestaurant.com/",
      myRating: "",
      notes: "",
      stamped: true,
      userId: "U01"
    },
    {
      id: 2,
      name: "Italian Pizza",
      address: "125 Main St",
      city: "San Francisco",
      zipcode: "91234",
      phoneNumber: "555-01235",
      websiteURL: "https://www.caffebaonecci.com/",
      myRating: "",
      notes: "",
      stamped: false,
      userId: "U01"
    }
  ]);

  //   const getRestaurants = () => {
  //     axios
  //       .get(
  //         "http://www.figma.com/file/SgBV7eLTJ6pU38zmOxEyes/restaurant_passport"
  //       )
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(error => {
  //         console.error("Server Error", error);
  //       });
  //   };

  //   useEffect(getRestaurants, []);

  return (
    <Card.Group itemsPerRow={2} className='restaurant-list'>
      {restaurants.map(item => (
        <RestaurantCard key={item.id} restaurant={item} />
      ))}
    </Card.Group>
  );
};

export default RestaurantList;
