import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import hamburgerMenu from "../../assets/hamburger_menu.svg";
import { useModal, useScreenWidth } from "../../zustand/store";

const Header = () => {
  const menuIsOpen = useModal(state => state.menu)
  const openMenu = useModal(state => state.openMenu)
  const closeAll = useModal(state => state.closeAll)
  const screenWidth = useScreenWidth(state => state.screenWidth) - 1

  const toggleMenu = () => {
    if(menuIsOpen) closeAll()
    else openMenu()
  }


  return (
    <header className={menuIsOpen && screenWidth < 1024 ? "header header__menu" : "header"}>
      {(menuIsOpen || screenWidth > 1024) && <Link to="/"><h2>HOMEPAGE</h2></Link>}
      {(menuIsOpen || screenWidth > 1024) && <Navbar />}
      <img src={hamburgerMenu} alt="menu" className="menuIcon" onClick={toggleMenu} />
    </header>
  );
};

export default Header;
