import React from "react";
import NavigateToRegister from "./NavigateToRegister";
import { Form, Field } from "formik"
import Button from "../Button/Button";

const FormAuth = ({ heading, errors, touched, method, btnName }) => {
  console.log(errors);

  const submitForm = (e) => {
    e.preventDefault()
    method()
  }

  return (
    <Form id="formAuth">
      <h2>{heading}</h2>
      <div>
        <Field name="email" placeholder="email" />
        {errors.email && touched.email ? <div className="error">{errors.email}</div> : <div></div>}
      </div>
      <div>
        <Field name="password" placeholder="password" type="password" />
        {errors.password && touched.password ? <div className="error">{errors.password}</div> : <div></div>}
      </div>
      <Button text={btnName} btnClass="btnSubmit" method={(e) => submitForm(e)} />
      { heading === 'LOGIN' && <NavigateToRegister /> }
    </Form>
  );
};

export default FormAuth;
