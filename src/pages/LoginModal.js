import React, { useContext } from "react";
import ReactDOM from "react-dom";
import NewsContext from "../utils/context";
import handleLogin from "../utils/auth_login";
import FormAuth from "../components/Modal/FormAuth";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginModal = () => {
  const navigate = useNavigate();
  const { setToggleModal, setAccessToken, setIsAdminLogged } = useContext(NewsContext);

  const formValidation = Yup.object().shape({
    email: Yup.string().required("This field is required!").email("Invalid email"),
    password: Yup.string().required("This field is required!").min(8, "Minimum 8 characters"),
  });

  return ReactDOM.createPortal(
    <div id="login-register">
      <button onClick={() => setToggleModal({ login: false, register: false })}>
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
            heading="LOGIN"
            btnName="Log in"
            method={() =>
              handleLogin(
                values.email,
                values.password,
                navigate,
                () => setToggleModal({ login: false, register: false }),
                () => setAccessToken(sessionStorage.getItem("accessToken")),
                () => setIsAdminLogged(true)
              )
            }
          />
        )}
      </Formik>
    </div>,
    document.getElementById("modal")
  );
};

export default LoginModal;
