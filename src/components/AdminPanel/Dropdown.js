/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { listOfCategories } from "../../utils/listOfCategories";
import arrowDown from '../../assets/iconmonstr-arrow-65.svg'
import { useRef } from "react";

const Dropdown = ({ category, formikCategories, setFieldValue }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(formikCategories[category] || "Select category")

  const update = useRef(0)

  useEffect(() => {
    if(update.current !== 0) 
      setFieldValue("category.secondary", "")
    update.current++
  }, [formikCategories.primary])
  
  const primaryCategories = [];
  for (const cat in listOfCategories) {
    primaryCategories.push(cat);
  }
  
  const secondaryCategories = listOfCategories[formikCategories.primary] || []
  
  const toggleDropdown = (e) => {
    e.preventDefault()
    setDisplayDropdown(!displayDropdown)
    if(e.target.tagName === "P"){
      if(category === "primary"){
        // formikCategories[category] = e.target.innerText
        setFieldValue("category.primary", e.target.innerText)
      }
      else setFieldValue("category.secondary", e.target.innerText)
      
      setSelectedCategory(e.target.innerText)
    }
  }
  
  const renderCategories = (category === "primary") ? 
  primaryCategories.map((category) => <p key={category}>{category}</p>) : 
  secondaryCategories.map((category) => <p key={category}>{category}</p>)

  return (
    <div id="dropdown" onClick={(e) => toggleDropdown(e)}>
      <div>{selectedCategory}<img src={arrowDown} alt="dropdown" /></div>
      {displayDropdown && <div>{renderCategories}</div>}
    </div>
  );
};

export default Dropdown;
