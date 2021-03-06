import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Card, Icon, Image, Header } from "semantic-ui-react";

import RestaurantCard from "./RestaurantCard";

const RestaurantList = props => {
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = () => {
    axios
      .get(
        "https://restaurant-passport-5.herokuapp.com/api/restaurants"
      )
      .then(response => {
        console.log(response.data);
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  useEffect(getRestaurants, []);

  return (
    <Card.Group itemsPerRow={2} className='restaurant-list' stackable>
     
      <Link to='/add'><Icon size='large' circular name='add' link /></Link>
      
      <Image
            floated='right'
            size='medium'
            src='https://raw.githubusercontent.com/Build-Week-Restaurant-Passport-5/frontend/master/design_files/restaurant-passport.png'
           
          />
      <Header floated='right' size='huge'>A home for all your foodie aspirations</Header>
      {restaurants.map(item => (
        <RestaurantCard key={item.id} restaurant={item} />
      ))}
    </Card.Group>
  );
};



export default RestaurantList;
