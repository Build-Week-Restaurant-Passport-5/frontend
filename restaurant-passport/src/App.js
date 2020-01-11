//React
import React from "react";
import { Route } from "react-router-dom";

//Components
import RestaurantList from "./components/RestaurantList";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantDetails from "./components/RestaurantDetails";
// import RestaurantDetails from "./components/RestaurantDetails"

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
        <Route exact path='/restaurants' render={props => <RestaurantList {...props} />} />
        <Route path='/register' render={props => <SignupForm {...props} />} />
        <Route path='/signin' render={props => <SigninForm {...props} />} />
        <Route path='/add' render={props => <RestaurantForm {...props} />} />
        <Route path='/restaurants/:id' render={props => <RestaurantDetails {...props} />} />


        {/*  */}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
