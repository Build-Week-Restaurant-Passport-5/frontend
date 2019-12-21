import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RestaurantList = props => {
    const [restaurants, setRestaurants] = useState([
        {
            restaurantId:1, 
            restaurantName:'Steak House', 
            streetAddress:'123 Main St', 
            city: 'San Francisco', 
            zipcode:'91234', 
            phoneNumber: '555-01234', 
            websiteURL:'http://www.harrisrestaurant.com/', 
            myRating:'', 
            notes:'', 
            stamped:false, 
            userId: 'U01'
        },
        {
            restaurantId:2, 
            restaurantName:'Italian Pizza', 
            streetAddress:'125 Main St', 
            city: 'San Francisco', 
            zipcode:'91234', 
            phoneNumber: '555-01235', 
            websiteURL:'https://www.caffebaonecci.com/', 
            myRating:'', 
            notes:'', 
            stamped:false, 
            userId: 'U01'        
        }
    ]);

  
  
    const getRestaurants = () => {
        // axios
        //   .get("insert api url")
        //   .then(response => {
        //     setRestaurant(response);
        //     console.log(response);
        //   })
        //   .catch(error => {
        //     console.error("Server Error", error);
        //   });
      };

    useEffect(getRestaurants,[]);


    return (
        <div className="restaurant-list">
            {restaurants.map(item => (
                <RestaurantDetails key={item.id} restaurant={item} />
            ))}

        </div>

    )

};

function RestaurantDetails({ restaurant }) {
    const {id, name, address, city, zipcode, phoneNumber, websiteURL, myRating, notes, stamped, userId } = restaurant;
    console.log('checking props', restaurant);
    return (
        <div className='container'>
            <h1>Name: {name}</h1>
            <h6>Address: {address}</h6>
            <h6>City: {city}</h6>
            <h6>Zipcode: {zipcode}</h6>
            <h6>Phone Number: {phoneNumber}</h6>
            <a href={websiteURL}>Website</a>
        </div>
    );
}

export default RestaurantList;


