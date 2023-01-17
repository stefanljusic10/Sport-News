import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import arrowDown from "../../assets/iconmonstr-arrow-65.svg";
import navigateToSubcategory from '../../utils/navigateToSubcategory'
import { listOfCategories } from '../../utils/listOfCategories'
import { useModal, useScreenWidth } from "../../zustand/store";

const Categories = () => {
  const navigate = useNavigate();
  const renderCategories = [];
  const { pathname } = useLocation()
  const screenWidth = useScreenWidth(state => state.screenWidth)
  const menuIsOpen = useModal(state => state.menu)
  const closeAllModals = useModal(state => state.closeAll)

  if(pathname.includes('admin')) return null
  if(!menuIsOpen && screenWidth < 1024) return null

  const selectPrimaryCategory = (property) => {
    closeAllModals()
    navigate(`/${property.toLowerCase()}`)
  }
  
  for (const property in listOfCategories) {
    renderCategories.push(
      <li key={property} onClick={() => selectPrimaryCategory(property)}>
        {property}
        {listOfCategories[property].length > 0 && <img src={arrowDown} alt="arrow" />}
        {listOfCategories[property].length > 0 && <ul className="categories__dropdown">
          {listOfCategories[property].map((subcategory) => (
            <li
              key={subcategory}
              onClick={(e) => navigateToSubcategory(e, property, subcategory, navigate, closeAllModals)}
            >
              {subcategory}
            </li>
          ))}
        </ul>}
      </li>
    );
  }

  return <ul className={menuIsOpen && screenWidth < 1024 ? "categories categories__menu" : " categories"}>{renderCategories}</ul>;
};

export default Categories;
