import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAdmin, useModal } from "../zustand/store";

const AdminAuthorization = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const openLoginModal = useModal((state) => state.openLogin);
  const isAdminLogged = useAdmin((state) => state.isAdminLogged);

  useEffect(() => {
    if (!isAdminLogged && pathname.includes("admin")) {
      openLoginModal();
      navigate("/");
    }
  }, []);

  return null;
};

export default AdminAuthorization;
