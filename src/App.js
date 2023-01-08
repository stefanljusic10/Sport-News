import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useNews from "./hooks/useNews";
import Header from "./components/Header/Header";
import News from "./pages/News";
import Footer from "./components/Footer/Footer";
import LoginModal from "./pages/LoginModal";
import RegisterModal from "./pages/RegisterModal";
import NewsContext from "./utils/context";
import SelectedNews from "./pages/SelectedNews";
import AdminPanel from "./pages/AdminPanel";
import CreateNews from "./components/AdminPanel/CreateNews";
import EditNews from "./pages/EditNews";
import ScrollToTop from "./utils/ScrollToTop";
import "./scss/main.scss";
import CreateAdminModal from "./pages/CreateAdminModal";
import { NavigationMenu } from "./utils/NavigationMenu";

const App = () => {
  const { news, reloadNews, setReloadNews } = useNews();
  const [toggleModal, setToggleModal] = useState({ login: false, register: false, createAdmin: false });
  const [accessToken, setAccessToken] = useState(sessionStorage.getItem('accessToken'))
  const [isAdminLogged, setIsAdminLogged] = useState(sessionStorage.getItem('isAdminLogged'))

  return (
    <NewsContext.Provider value={{ news, reloadNews, setReloadNews, isAdminLogged, setIsAdminLogged, accessToken, setAccessToken, toggleModal, setToggleModal }}>
      <BrowserRouter>
        <ScrollToTop />
        <NavigationMenu />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/:category" element={<News />} />
            <Route path="/:category/:subcategory" element={<News />} />
            <Route path="/:category/:subcategory/:id" element={<SelectedNews />} />
            <Route path="/admin" element={isAdminLogged && <AdminPanel />} />
            <Route path="/admin/create" element={isAdminLogged && <CreateNews />} />
            <Route path="/admin/edit/:id" element={isAdminLogged && <EditNews />} />
          </Routes>
          {toggleModal.login && <LoginModal />}
          {toggleModal.register && <RegisterModal />}
          {toggleModal.createAdmin && <CreateAdminModal />}
        </main>
        <Footer />
      </BrowserRouter>
    </NewsContext.Provider>
  )
};

export default App;
