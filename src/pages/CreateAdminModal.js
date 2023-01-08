import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import NewsContext from "../utils/context";
import FormAuth from "../components/Modal/FormAuth";
import { addNewAdmin } from "../utils/addNewAdmin";
import handleRegister from "../utils/auth_register";

const CreateAdminModal = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { setToggleModal } = useContext(NewsContext);

  const createNewAdmin = (e) => {
    e.preventDefault()
    addNewAdmin(data.email, "admin")
    .then(() => {
      handleRegister(
        e, 
        data.email, 
        data.password, 
        () => setToggleModal({ login: false, register: false, createAdmin: false})
      )
    })
  }

  return ReactDOM.createPortal(
    <div id="login-register">
      <button
        onClick={() => setToggleModal({ login: false, register: false, createAdmin: false })}
      >
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
      <FormAuth
        heading="CREATE NEW ADMIN"
        data={data}
        setData={setData}
        method={(e) => createNewAdmin(e)}
        btnName="Register"
      />
    </div>,
    document.getElementById("modal")
  );
};

export default CreateAdminModal;
