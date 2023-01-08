import React, { useContext } from "react";
import NewsContext from "../../utils/context";

const Nav = () => {
  const { setToggleModal } = useContext(NewsContext);
  return (
    <ul className="auth">
      <li onClick={() => setToggleModal({ login: true, register: false, createAdmin: false })}>
        Log in
      </li>
      <li onClick={() => setToggleModal({ login: false, register: true, createAdmin: false })}>
        Register
      </li>
    </ul>
  );
};

export default Nav;
