import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Button, Card, Image } from "semantic-ui-react";
import * as Yup from "yup";
import StarsInput from "./custom-formik-component/StarsInput";
import axios from 'axios';



const RestaurantForm = ({ values, errors, touched, status }) => {
    console.log('value', values);
    console.log('errors', errors);
    console.log('touched', touched);


// Example schema:
    // restaurantId:1, 
    // restaurantName:'Steak House', 
    // streetAddress:'123 Main St', 
    // city: 'San Francisco', 
    // zipcode:'91234', 
    // phoneNumber: '555-01234', 
    // websiteURL:'http://www.harrisrestaurant.com/', 
    // myRating:'', 
    // notes:'', 
    // stamped:false, 
    // userId: 'U01'

    const [restaurants, setRestaurants] = useState([]);

useEffect(() => {
    console.log('status has changed', status);

    status && setRestaurants(restaurants => [...restaurants, status]);
}, [status]);

return (
    <Card fluid>
        <Card.Content>
        <Image
            floated='right'
            size='medium'
            src='https://files.slack.com/files-pri/T4JUEB3ME-FRYB8R0LC/restaurant-passport.png'
           
          />

        <div className='restaurant-form'>
            <Form>
            <Card.Meta>
                <label htmlFor='restaurantName'>Restaurant Name</label><br />
                    <Field
                        id='restaurantName'
                        type='text'
                        name='restaurantName'
                        placeholder='Name of restaurant'
                    />
                    {touched.restaurantName && errors.restaurantName && (
                        <p className='errors'>{errors.restaurantName}</p>
                    )}
            </Card.Meta><br />

            <Card.Meta>
                <label htmlFor='streetAddress'>
                    Restaurant Address</label><br />
                    <Field
                        id='streetAddress'
                        type='text'
                        name='streetAddress'
                        placeholder='Address of restaurant'
                    />
                    {touched.streetAddress && errors.streetAddress && (
                        <p className='errors'>{errors.streetAddress}</p>
                    )}
                
            </Card.Meta><br />

            <Card.Meta>
                <label htmlFor='city'>
                    Restaurant City</label><br />
                    <Field
                        id='city'
                        type='text'
                        name='city'
                        placeholder='City'
                    />
                    {touched.restaurantCity && errors.restaurantCity && (
                        <p className='errors'>{errors.city}</p>
                    )}
                </Card.Meta><br />

                <Card.Meta>
                <label htmlFor='zipcode'>
                    Restaurant Zipcode</label><br />
                    <Field
                        id='zipcode'
                        type='text'
                        name='zipcode'
                        placeholder='Zipcode'
                    />
                    {touched.zipcode && errors.zipcode && (
                        <p className='errors'>{errors.zipcode}</p>
                    )}
                </Card.Meta><br />

                <Card.Meta>
                <label htmlFor='phoneNumber'>
                    Restaurant Phone Number</label><br />
                    <Field
                        id='phoneNumber'
                        type='text'
                        name='phoneNumber'
                        placeholder='Phone Number'
                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                        <p className='errors'>{errors.phoneNumber}</p>
                    )}
                </Card.Meta><br />

                <Card.Meta>
                <label htmlFor='websiteURL'>
                    Website URL</label><br />
                    <Field 
                        type='text'
                        id='websiteURL' 
                        name='websiteURL' 
                        label='http://' 
                        placeholder='site.com' 
                         />
                    {touched.websiteURL && errors.websiteURL && (
                        <p className='errors'>{errors.websiteURL}</p>
                    )}
                </Card.Meta><br />

                <Card.Meta>
                <label htmlFor="stamped">
                    Been there?</label><br />
                    <Field 
                        type='checkbox'
                        id='stamped' 
                        name='stamped' 
                         />
                    {touched.stamped && errors.stamped && (
                        <p className='errors'>{errors.stamped}</p>
                    )}
                </Card.Meta><br />

                <Card.Meta>
                <label className="rating-container">
                    Rating</label><br />
                <StarsInput />
                </Card.Meta><br />

                <Card.Meta>
                <Field
                    type='text'
                    id='notes' 
                    name='notes' 
                    placeholder='notes...'
                />
                </Card.Meta><br />

                <Card.Meta>
                <Button type="submit">SAVE</Button>
                </Card.Meta><br />
            </Form>

            {/*update when API available*/}     
            {restaurants.map(restaurant => {
                return (
                <ul>
                <li>Name: {restaurant.restaurantName}</li>
                <li>Address: {restaurant.streetAddress}</li>
                </ul>
                );
            })}
        </div>
        </Card.Content>
    </Card>
    );
};

const FormikRestaurantForm = withFormik({
      mapPropsToValues(props) {
        return {
            restaurantName: props.restaurantName || "",
            streetAddress: props.streetAddress || "",
            city: props.city || "",
            zipcode: props.zipcode || "",
            phoneNumber: props.phoneNumber || "",
            websiteURL: props.websiteURL || "",
            myRating: props.myRating || "",
            notes: props.notes || "",
            stamped: props.stamped || false,
        };
      },

        validationSchema: Yup.object().shape({
            restaurantName: Yup.string().required('Please enter name'),

        }),
    

    //   handleSubmit(values, { setStatus, resetForm }) {
    //     console.log("submitting", values);
    //     // axios
    //     //   .post("", values)
    //     //   .then(res => {
    //     //     console.log("success", res);
    //     //     setStatus(res.data);
    
    //     //     //clears form inputs, from FormikBag
    //     //     resetForm();
    //     //   })
    //     //   .catch(err => console.log(err.response));
    //   }

    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        
          axios
            .post(`https://restaurant-passport-5.herokuapp.com/api/restaurants/${1}`, values)
            .then(res => {
              console.log(res); // Data was created successfully and logs to console
              resetForm();
              setSubmitting(false);
              //add redirect to homepage
            })
            .catch(err => {
              console.log(err); // There was an error creating the data and logs to console
              setSubmitting(false);
            });
        

}
    })(RestaurantForm);

    export default FormikRestaurantForm;

