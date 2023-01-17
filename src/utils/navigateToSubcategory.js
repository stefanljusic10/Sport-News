import formatString from "./formatString";

const navigateToSubcategory = (e, category, subcategory, navigate, closeAllModals) => {
  e.stopPropagation();
  navigate(`/${category.toLowerCase()}/${formatString(subcategory)}`);
  closeAllModals()
};

export default navigateToSubcategory;
