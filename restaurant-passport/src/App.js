import React from "react";
import { Route } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import Navigation from "./components/partials/Navigation";
import Footer from "./components/partials/Footer";

import { Container } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Navigation />
      <Container text style={{ marginTop: "2em" }}>
        <Route exact path='/' render={props => <RestaurantList {...props} />} />
        
        {/* <Route path='/restaurant/:id' render={props => <RestaurantDetails {...props} />} /> */}
      </Container>
	  <Footer />
    </div>
  );
}

export default App;
