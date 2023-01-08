import React from "react";
import { useModal } from "../../zustand/store";

const Nav = () => {
  const openLoginModal = useModal(state => state.openLogin)
  const openRegisterModal = useModal(state => state.openRegister)
  
  return (
    <ul className="auth">
      <li onClick={openLoginModal}>
        Log in
      </li>
      <li onClick={openRegisterModal}>
        Register
      </li>
    </ul>
  );
};

export default Nav;
