import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormAuth from "../components/Modal/FormAuth";
import { addNewAdmin } from "../utils/addNewAdmin";
import handleRegister from "../utils/auth_register";
import { useModal } from "../zustand/store";
import { Formik } from "formik";
import * as Yup from "yup";

const CreateAdminModal = () => {
  const closeAllModals = useModal((state) => state.closeAll);

  const createNewAdmin = (e, email, password) => {
    e.preventDefault();
    addNewAdmin(email, "admin")
    .then(() => handleRegister(e, email, password, closeAllModals));
  };

  const formValidation = Yup.object().shape({
    email: Yup.string().required("This field is required!").email("Invalid email"),
    password: Yup.string().required("This field is required!").min(8, "Minimum 8 characters"),
  });

  return ReactDOM.createPortal(
    <div id="login-register">
      <button onClick={closeAllModals}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={formValidation}
      >
        {({ values, errors, touched }) => (
          <FormAuth
            data={values}
            errors={errors}
            touched={touched}
            heading="CREATE NEW ADMIN"
            btnName="Register"
            method={(e) => createNewAdmin(e, values.email, values.password)}
          />
        )}
      </Formik>
    </div>,
    document.getElementById("modal")
  );
};

export default CreateAdminModal;
