import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantList from './components/RestaurantList';
import FormikRestaurantForm from './components/RestaurantForm';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
      <RestaurantList />
      <FormikRestaurantForm />
    </div>
  );
}

export default App;
