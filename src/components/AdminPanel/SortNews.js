import React, { useState } from 'react'
import { listOfCategories } from '../../utils/listOfCategories'
import downArrowSort from '../../assets/down-arrow-sort.svg'
import dropdownArrow from '../../assets/dropdown-arrow.svg'

const SortNews = () => {

  const [toggleDropdown, setToggleDropdown] = useState(false)

  const pickCategory = (e) => {
    setToggleDropdown(false)
  }

  const categoriesDropdown = []
  for (const property in listOfCategories) {
    categoriesDropdown.push(
      <p key={property} onClick={(e) => pickCategory(e)}>{property.toLowerCase()}</p>
    )
  }

  return (
    <div id="sortNews">
        <div>
          <span>
            author
            <img src={downArrowSort} alt="desc" />
          </span>
        </div>
        <div>
          <span>
            date
            <img src={downArrowSort} alt="desc" />
          </span>
        </div>
        <div className='category'>
          <span onClick={() => setToggleDropdown(!toggleDropdown)}>
            category
            <img className='dropdownArrow' src={dropdownArrow} alt="desc" />
          </span>
          {toggleDropdown && <div className='sort__dropdown'>
            {categoriesDropdown}
          </div>}
        </div>
        <div></div>
        <div></div>
      </div>
  )
}

export default SortNews