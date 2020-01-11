import React, { useEffect, useState } from "react";
import axios from 'axios'

const RestaurantDetails = ({ match }) => {
    const [details, setDetails] = useState({});
    const getRestaurants = () => {
        axios
            .get(
                `https://restaurant-passport-5.herokuapp.com/api/restaurants/${match.params.id}`
            )
            .then(response => {
                console.log('response', response.data);
                setDetails(response.data);
            })
            .catch(error => {
                console.error("Server Error", error);
            });
    };
    useEffect(getRestaurants, []);
    console.log("Item:", details.restaurantName);

    return <div>
        <h1>{details.restaurantName}</h1>
        <p>{details.streetAddress}</p>
        <p>{details.city}</p>
        <p>{details.zipcode}</p>
        <p>{details.phoneNumber}</p>
        <p>{details.websiteURL}</p>
        <p>{details.myRating}</p>
        <p>{details.notes}</p>
    </div>;
};

export default RestaurantDetails;
