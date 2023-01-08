import formatString from "./formatString";

const navigateToSubcategory = (e, category, subcategory, navigate) => {
  e.stopPropagation();
  navigate(`/${category.toLowerCase()}/${formatString(subcategory)}`);
};

export default navigateToSubcategory;
