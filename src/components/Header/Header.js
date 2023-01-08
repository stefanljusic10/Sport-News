import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import NewsContext from "../../utils/context";
import Categories from "./Categories";
import Nav from "./Nav";
import NavLogged from "./NavLogged";
import hamburgerMenu from "../../assets/hamburger_menu.svg";

const Header = () => {
  const { accessToken } = useContext(NewsContext);
  const { pathname } = useLocation();

  return (
    <>
      <header id="header">
        <Link to="/">
          <h2>HOMEPAGE</h2>
        </Link>
        {accessToken ? <NavLogged /> : <Nav />}
        <img src={hamburgerMenu} alt="menu" className="navigationImg" />
      </header>
      {!pathname.includes('admin') && <Categories />}
    </>
  );
};

export default Header;
