//React
import React from "react";
import { Route } from "react-router-dom";

//Components
import RestaurantList from "./components/RestaurantList";
import SigninForm from "./components/signinForm";
import SignupForm from "./components/signupForm";
import RestaurantForm from "./components/RestaurantForm";

//Common Components
import Navigation from "./components/partials/Navigation";
import Footer from "./components/partials/Footer";

//Design
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Navigation />
      <Container text style={{ marginTop: "2em" }}>
        <Route exact path='/' render={props => <RestaurantList {...props} />} />
        <Route path='/signup' render={props => <SignupForm {...props} />} />
        <Route path='/signin' render={props => <SigninForm {...props} />} />
        <Route path='/add' render={props => <RestaurantForm {...props} />} />


        {/* <Route path='/restaurant/:id' render={props => <RestaurantDetails {...props} />} /> */}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
