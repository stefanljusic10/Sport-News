import React from 'react'
import ReactDOM from "react-dom";
import Header from "../components/Header/Header"
import Categories from '../components/Header/Categories';

const MenuModal = () => {
  return ReactDOM.createPortal(
    <div className="menu">
      <Header />
      <Categories />
    </div>,
    document.getElementById("modal")
  )
}

export default MenuModal