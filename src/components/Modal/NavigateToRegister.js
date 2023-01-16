import React from "react";
import { useModal } from "../../zustand/store";

const NavigateToRegister = () => {
  const registerModal = useModal((state) => state.openRegister);

  const navigateToRegister = (e) => {
    e.preventDefault();
    registerModal();
  };
  
  return (
    <button className="btnGoToRegister" onClick={(e) => navigateToRegister(e)}>
      Don't have an account? Register now
    </button>
  );
};

export default NavigateToRegister;
