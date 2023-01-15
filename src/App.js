import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./pages/News";
import Footer from "./components/Footer/Footer";
import LoginModal from "./pages/LoginModal";
import RegisterModal from "./pages/RegisterModal";
import SelectedNews from "./pages/SelectedNews";
import AdminPanel from "./pages/AdminPanel";
import CreateNews from "./components/AdminPanel/CreateNews";
import EditNews from "./pages/EditNews";
import Error from "./pages/Error";
import ScrollToTop from "./utils/ScrollToTop";
import CreateAdminModal from "./pages/CreateAdminModal";
import { NavigationMenu } from "./utils/NavigationMenu";
import { useNews, useModal, useAdmin } from "./zustand/store";
import shallow from "zustand/shallow";
import "./scss/main.scss";
import AdminAuthorization from "./utils/AdminAuthorization";

const App = () => {
  const setNews = useNews((state) => state.setNews);
  const isAdminLogged = useAdmin((state) => state.isAdminLogged);
  const { loginModal, registerModal, createAdminModal } = useModal(
    (state) => ({
      loginModal: state.login,
      registerModal: state.register,
      createAdminModal: state.createAdmin
    }),
    shallow
  );

  useEffect(() => {
    setNews();
  }, []);

  return (
    <BrowserRouter>
      <AdminAuthorization />
      <ScrollToTop />
      <NavigationMenu />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/:category" element={<News />} />
          <Route path="/:category/:subcategory" element={<News />} />
          <Route path="/:category/:subcategory/:id" element={<SelectedNews />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/create" element={<CreateNews />} />
          <Route path="/admin/edit/:id" element={<EditNews />} />
        </Routes>
        {loginModal && <LoginModal />}
        {registerModal && <RegisterModal />}
        {createAdminModal && <CreateAdminModal />}
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
