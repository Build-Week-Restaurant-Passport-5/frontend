import React from "react";
import { Button, Card, Image, Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function RestaurantCard(props) {
  console.log("Card: ", props);

  function toggleAnimation() {}

  return (
    <Card fluid>
      <Image src='https://via.placeholder.com/150x75.png' wrapped ui={false} />
      <Card.Content>
        <Transition animation='pulse' duration={1000} visible={true}>
          <Image
            floated='left'
            size='mini'
            src='https://files.slack.com/files-pri/T4JUEB3ME-FRYB8R0LC/restaurant-passport.png'
            width='100px'
            onClick={toggleAnimation}
          />
        </Transition>
        <Card.Header>{props.restaurant.name}</Card.Header>
        <Card.Meta>{props.restaurant.city}</Card.Meta>
        <Card.Description>This card doesn't have any info!</Card.Description>
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
