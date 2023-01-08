import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NewsContext from "../../utils/context";

const NavLogged = () => {
  const { setAccessToken, setToggleModal, isAdminLogged, setIsAdminLogged, } = useContext(NewsContext);

  const logOut = () => {
    sessionStorage.clear();
    setAccessToken(false);
    setIsAdminLogged(false);
    setToggleModal({ login: false, register: false, createAdmin: false });
  };
  
  return (
    <div className="navLogged">
      {isAdminLogged && <Link to="/admin">Admin Panel</Link>}
      {isAdminLogged && (
        <p onClick={() => setToggleModal({ login: false, register: false, createAdmin: true }) }>
          Create new admin
        </p>
      )}
      <Link to="/" onClick={logOut}>
        Log out
      </Link>
    </div>
  );
};

export default NavLogged;
