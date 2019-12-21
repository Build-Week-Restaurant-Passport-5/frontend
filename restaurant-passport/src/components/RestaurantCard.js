import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

export default function RestaurantCard(props) {
  return (
    <div>
      <Card>
        <Image
          src='https://via.placeholder.com/150x75.png'
          wrapped
          ui={false}
        />
        <Card.Content>
          <Image
            floated='left'
            size='mini'
            src='https://via.placeholder.com/150'
          />
          <Card.Header>Burger King</Card.Header>
          <Card.Meta>Orlando, FL</Card.Meta>
          <Card.Description>This card doesn't have any info!</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='blue'>
              View
            </Button>
            <Button basic color='red'>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
