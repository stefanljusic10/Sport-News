import React from "react";
import { Link } from "react-router-dom";
import { useAccessToken, useAdmin, useModal } from "../../zustand/store";

const NavLogged = () => {
  const createAdminModal = useModal(state => state.openCreateAdmin)
  const closeAllModals = useModal(state => state.closeAll)
  const clearAccessToken = useAccessToken(state => state.clearAccessToken)
  const isAdminLogged = useAdmin(state => state.isAdminLogged)
  const setIsAdminLogged = useAdmin(state => state.setIsAdminLogged)

  const logOut = () => {
    sessionStorage.clear();
    setIsAdminLogged(false);
    clearAccessToken();
    closeAllModals();
  };
  
  return (
    <div className="navLogged">
      {isAdminLogged && <Link to="/admin">Admin Panel</Link>}
      {isAdminLogged && (
        <p onClick={createAdminModal }>
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
