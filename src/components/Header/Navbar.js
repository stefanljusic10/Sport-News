import React from "react";
import { useNavigate } from "react-router-dom";
import { useAccessToken, useAdmin, useModal } from "../../zustand/store";

const NavLogged = () => {
  const openCreateAdminModal = useModal(state => state.openCreateAdmin)
  const closeAllModals = useModal(state => state.closeAll)
  const openLoginModal = useModal(state => state.openLogin)
  const openRegisterModal = useModal(state => state.openRegister)
  const isMenuOpen = useModal(state => state.menu)
  const isAdminLogged = useAdmin(state => state.isAdminLogged)
  const setIsAdminLogged = useAdmin(state => state.setIsAdminLogged)
  const accessToken = useAccessToken(state => state.accessToken)
  const clearAccessToken = useAccessToken(state => state.clearAccessToken)
  const navigate = useNavigate()

  const logOut = () => {
    sessionStorage.clear();
    setIsAdminLogged(false);
    clearAccessToken();
    closeAllModals();
    navigate("/")
  };

  const adminPanelNavigate = () => {
    navigate("/admin")
    closeAllModals()
  }
  
  return (
    <ul className={isMenuOpen ? "navbar navbar__menu" : "navbar"}>
      {!accessToken && <li onClick={openLoginModal}>Log in</li>}
      {!accessToken && <li onClick={openRegisterModal}>Register</li>}
      {isAdminLogged && <li onClick={adminPanelNavigate}>Admin Panel</li>}
      {isAdminLogged && <li onClick={openCreateAdminModal}>Create new admin</li>}
      {accessToken && <li onClick={logOut}>Log out</li>}
    </ul>
  );
};

export default NavLogged;
