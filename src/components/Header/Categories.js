import React from "react";
import { useNavigate } from "react-router-dom";
import arrowDown from "../../assets/iconmonstr-arrow-65.svg";
import navigateToSubcategory from '../../utils/navigateToSubcategory'
import { listOfCategories } from '../../utils/listOfCategories'

const Categories = () => {
  const navigate = useNavigate();
  const renderCategories = [];
  
  for (const property in listOfCategories) {
    renderCategories.push(
      <li key={property} onClick={() => navigate(`/${property.toLowerCase()}`)}>
        {property}
        {listOfCategories[property].length > 0 && <img src={arrowDown} alt="arrow" />}
        {listOfCategories[property].length > 0 && <ul className="categories__dropdown">
          {listOfCategories[property].map((subcategory) => (
            <li
              key={subcategory}
              onClick={(e) => navigateToSubcategory(e, property, subcategory, navigate)}
            >
              {subcategory}
            </li>
          ))}
        </ul>}
      </li>
    );
  }

  return <ul id="categories">{renderCategories}</ul>;
};

export default Categories;
