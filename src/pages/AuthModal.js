import React from "react";
import ReactDOM from "react-dom";
import handleLogin from "../utils/auth_login";
import handleRegister from "../utils/auth_register";
import Button from "../components/Button/Button";
import NavigateToRegister from "../components/Modal/NavigateToRegister";
import { addNewAdmin } from "../utils/addNewAdmin";
import { useNavigate } from "react-router-dom";
import { useAccessToken, useAdmin, useModal } from "../zustand/store";
import { Formik } from "formik";
import { Form, Field } from "formik";
import * as Yup from "yup";
import CloseModal from "../components/Button/CloseModal";

const AuthModal = ({ heading, btnName }) => {
  const navigate = useNavigate();
  const closeAllModals = useModal((state) => state.closeAll);
  const setLoginMessage = useAdmin((state) => state.setLoginMessage);
  const setIsAdminLogged = useAdmin((state) => state.setIsAdminLogged);
  const setAccessToken = useAccessToken((state) => state.setAccessToken);
  const loginMessage = useAdmin((state) => state.loginMessage);

  const formValidation = Yup.object().shape({
    email: Yup.string()
      .required("This field is required!")
      .email("Invalid email"),
    password: Yup.string()
      .required("This field is required!")
      .min(8, "Minimum 8 characters"),
  });

  return ReactDOM.createPortal(
    <div className="login-register">
      <CloseModal />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={formValidation}
      >
        {({ values, errors, touched }) => (
          <Form className="formAuth">
            <h2>{heading}</h2>
            {loginMessage && !errors.email && !errors.password && (
              <div className="error">{loginMessage}</div>
            )}
            <div>
              <Field name="email" placeholder="email" />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              <Field name="password" placeholder="password" type="password" />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : (
                <div></div>
              )}
            </div>
            <Button
              text={btnName}
              btnClass="btnSubmit"
              method={(e) => {
                e.preventDefault();
                if (heading === "LOGIN")
                  handleLogin(
                    values.email,
                    values.password,
                    navigate,
                    closeAllModals,
                    setAccessToken,
                    setIsAdminLogged,
                    setLoginMessage
                  );
                else if (heading === "REGISTER")
                  handleRegister(values.email, values.password, closeAllModals, setLoginMessage);
                else if (heading === "CREATE NEW ADMIN")
                  addNewAdmin(values.email, "admin")
                  .then(() => {
                    handleRegister(values.email, values.password, closeAllModals);
                    navigate("/admin");
                  });
              }}
            />
            {heading === "LOGIN" && <NavigateToRegister />}
          </Form>
        )}
      </Formik>
    </div>,
    document.getElementById("modal")
  );
};

export default AuthModal;
