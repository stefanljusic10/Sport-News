import React from "react";
import NavigateToRegister from "./NavigateToRegister";
import { Form, Field } from "formik"
import Button from "../Button/Button";
import { useAdmin } from "../../zustand/store";

const FormAuth = ({ heading, errors, touched, btnName, method }) => {
  const loginMessage = useAdmin(state => state.loginMessage)

  const submitForm = (e) => {
    e.preventDefault()
    method()
  }

  return (
    <Form className="formAuth">
      <h2>{heading}</h2>
      {loginMessage && !errors.email && !errors.password && <div className="error">{loginMessage}</div>}
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
