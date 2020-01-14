import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Card, Image, Transition, Icon, Rating } from "semantic-ui-react";


const RestaurantDetails = ({ match }) => {
    const [details, setDetails] = useState({});
    const [loadState, setLoadState] = useState('waiting');


    const getRestaurants = () => {
        axios
            .get(
                `https://restaurant-passport-5.herokuapp.com/api/restaurants/${match.params.id}`
            )
            .then(response => {
                console.log('response', response.data);
                setDetails(response.data);
                setLoadState('done!');

            })
            .catch(error => {
                console.error("Server Error", error);
            });
    };
    useEffect(getRestaurants, []);

    useEffect(() => {
        console.log('status has changed', loadState);
    
    }, [loadState]);


    var rating = details.myRating;
    console.log("Item:", details);
    console.log('rating type is', typeof(rating));

    if (loadState === 'waiting'){
        return <div><h1>Loading......</h1></div>
    } else {


            return <div>
        <Card fluid>
        <Card.Content>
        <Card.Header><Icon name='food' /> {details.restaurantName}</Card.Header>
        <Card.Meta>{details.streetAddress}</Card.Meta>
        <Card.Meta>{details.city}</Card.Meta>
        <Card.Meta>{details.zipcode}</Card.Meta>
        <Card.Meta>{details.phoneNumber}</Card.Meta>
        <Card.Meta><a href={details.websiteURL}>{details.websiteURL}</a> </Card.Meta>
        <Card.Meta><Rating defaultRating={details.myRating} maxRating={5} disabled /></Card.Meta>
        <Card.Meta>{details.notes}</Card.Meta>
        </Card.Content>
    </Card>
    </div>;
}
        };



export default RestaurantDetails;
