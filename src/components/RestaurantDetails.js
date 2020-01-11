import React, { useEffect, useState } from "react";
import axios from 'axios'

const RestaurantDetails = ({ match }) => {
    const [details, setDetails] = useState()
    const getRestaurants = () => {
        axios
            .get(
                `https://restaurant-passport-5.herokuapp.com/api/restaurants/${match.params.id}`
            )
            .then(response => {
                console.log(response.data);
                setDetails(response.data)
                console.log("Item:", details);

            })
            .catch(error => {
                console.error("Server Error", error);
            });
    };
    useEffect(getRestaurants, []);
    return <div>
        {/* <h1>{details.restaurantName}</h1> */}
        {/* <p>{details.streetAddress}</p>
        <p>{details.city}</p>
        <p>{details.zipcode}</p>
        <p>{details.phoneNumber}</p>
        <p>{details.websiteURL}</p>
        <p>{details.myRating}</p>
        <p>{details.notes}</p> */}
    </div>;
};

export default RestaurantDetails;
