import React, { useState } from "react";
import { Button, Card, Image, Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function RestaurantCard(props) {
  console.log("Card: ", props);

  let [visible, setVisible] = useState(true);
  let [pulse, setPulse] = useState(true);

  function toggleVisibility() {
    setVisible(!visible)
  }
  function togglePulse() {
    setPulse(!pulse)
  }

  function beenThere(item) {
    console.log(item.restaurant.stamped)
    return (item.restaurant.stamped ? "https://github.com/Build-Week-Restaurant-Passport-5/frontend/blob/master/restaurant-passport/design_files/restaurant-passport-v2-primary.png?raw=true" : "https://github.com/Build-Week-Restaurant-Passport-5/frontend/blob/master/restaurant-passport/design_files/restaurant-passport-v2.png?raw=true")
  }

  return (
    <Card >


      <Card.Content>
        <Transition visible={pulse} animation='pulse' duration={500}>
          <Image
            floated='left'
            size='mini'
            src={beenThere(props)}
            width='100px'
            onClick={togglePulse}
          />
        </Transition>

        <Card.Header>{props.restaurant.restaurantName}</Card.Header>
        <Card.Meta>{props.restaurant.city}</Card.Meta>
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
          {/* <Button basic color='red'>
            Delete
          </Button> */}



        </div>
      </Card.Content>
    </Card>
  );
}
