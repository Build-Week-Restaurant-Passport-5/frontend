import React from "react";
import { Button, Card, Image, Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function RestaurantCard(props) {
  console.log("Card: ", props);

  function toggleAnimation() {}

  function beenThere(item){
    console.log(item.restaurant.stamped)
    if (item.restaurant.stamped === false) {
      return <Card.Meta>Not been there yet!</Card.Meta>
    } else {
      return <Card.Meta>Been there</Card.Meta>
    }
  }

  return (
    <Card fluid>
      <Image src='https://via.placeholder.com/150x75.png' wrapped ui={false} />
      <Card.Content>
       
          <Image
            floated='left'
            size='mini'
            src='https://files.slack.com/files-pri/T4JUEB3ME-FRYB8R0LC/restaurant-passport.png'
            width='100px'
           
          />
        
        <Card.Header>{props.restaurant.name}</Card.Header>
        <Card.Meta>{props.restaurant.city}</Card.Meta>
        <Card.Meta>{beenThere(props)}</Card.Meta>
      </Card.Content>

      <Card.Content extra>
        <div className='ui two buttons'>
          <Button
            as={Link}
            to={`/restaurants/${props.restaurant.id}}`}
            basic
            color='blue'>
            View
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
