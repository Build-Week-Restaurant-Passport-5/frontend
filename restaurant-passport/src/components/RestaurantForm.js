import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


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
    <div className='restaurant-form'>
        <Form>
            <label htmlFor='restaurantName'>
                Restaurant Name
                <Field
                    id='restaurantName'
                    type='text'
                    name='restaurantName'
                    placeholder='name of restaurant'
                />
                {touched.restaurantName && errors.restaurantName && (
                    <p className='errors'>{errors.restaurantName}</p>
                )}
            </label>
            <label htmlFor='streetAddress'>
                Restaurant Address
                <Field
                    id='streetAddress'
                    type='text'
                    name='streetAddress'
                    placeholder='Address of restaurant'
                />
                {touched.streetAddress && errors.streetAddress && (
                    <p className='errors'>{errors.streetAddress}</p>
                )}
            </label>
            <label htmlFor='city'>
                Restaurant City
                <Field
                    id='city'
                    type='text'
                    name='city'
                    placeholder='City'
                />
                {touched.restaurantCity && errors.restaurantCity && (
                    <p className='errors'>{errors.city}</p>
                )}
            </label>
            <label htmlFor='zipcode'>
                Restaurant Zipcode
                <Field
                    id='zipcode'
                    type='text'
                    name='zipcode'
                    placeholder='zipcode'
                />
                {touched.zipcode && errors.zipcode && (
                    <p className='errors'>{errors.zipcode}</p>
                )}
            </label>
            <label htmlFor='phoneNumber'>
                Restaurant Phone Number
                <Field
                    id='phoneNumber'
                    type='text'
                    name='phoneNumber'
                    placeholder='Phone Number'
                />
                {touched.phoneNumber && errors.phoneNumber && (
                    <p className='errors'>{errors.phoneNumber}</p>
                )}
            </label>
            <label htmlFor='websiteURL'>
                Website URL
                <Field
                    id='websiteURL'
                    type='text'
                    name='websiteURL'
                    placeholder='Website URL'
                />
                {touched.websiteURL && errors.websiteURL && (
                    <p className='errors'>{errors.websiteURL}</p>
                )}
            </label>
            {/*will update with toggle using Semantic UI*/}     
            <label className="checkbox-container">
                Been there!
                <Field
                type="checkbox"
                name="stamped"
                checked={values.stamped}
                />
                <span className="checkmark" />
            </label>
            {/*will update with stars using Semantic UI*/}     
                <Field as="select" className="myRating" name="myRating">
                    <option disabled>Rate it out of 5</option>
                    <option value="rating1">1</option>
                    <option value="rating2">2</option>
                    <option value="rating3">3</option>
                    <option value="rating4">4</option>
                    <option value="rating5">5</option>
                </Field>
            <Field as="textarea" type="text" name="notes" placeholder="Notes" />
            <button type="submit">SAVE</button>
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
    

      handleSubmit(values, { setStatus, resetForm }) {
        console.log("submitting", values);
        // axios
        //   .post("", values)
        //   .then(res => {
        //     console.log("success", res);
        //     setStatus(res.data);
    
        //     //clears form inputs, from FormikBag
        //     resetForm();
        //   })
        //   .catch(err => console.log(err.response));
      }
    })(RestaurantForm);

    export default FormikRestaurantForm;