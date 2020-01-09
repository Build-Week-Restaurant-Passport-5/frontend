import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupForm = ({ values, errors, touched, status }) => {
  console.log("values", values);
  console.log("errors", errors);
  console.log("touched", touched);

  // local state that holds successful form submission data
  const [users, setUsers] = useState([]);

  // listens for status changes to update  state
  useEffect(() => {
    console.log("status has changed!", status);

    status && setUsers(users => [...users, status]);
  }, [status]);
  return (
    <div className="animal-form">

      <Form>

        <label htmlFor="username">
          Username

          <Field
            id="username"
            type="text"
            name="username"
            placeholder="username"
          />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}
        </label>

        <label htmlFor="password">
          Password

          <Field
            id="password"
            type="password"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        <label htmlFor="confirm_password">
          Confirm Password

          <Field
            id="confirm_password"
            type="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          {touched.confirm_password && errors.confirm_password && (
            <p className="errors">{errors.confirm_password}</p>
          )}
        </label>

        <button type="submit">Submit!</button>
      </Form>
      {users.map(user => {
        return (
          <ul key={user.id}>
            <li>username: {user.username}</li>
            <li>Password: {user.password}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikSignupForm = withFormik({
  // props from <AnimalForm /> in app are in props param
  mapPropsToValues(props) {
    // set initial state of form to value from parent component OR the initial value (after || )
    return {
      username: props.username || "",
      password: props.password || "",
    };
  },

  // Declare shape and requirement of values object (form state )
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must be 6 characters or longer")
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required")
  }),


  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("success", res);

        setStatus(res.data);

        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(SignupForm);
export default FormikSignupForm;

