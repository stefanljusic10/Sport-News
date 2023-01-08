const addHashtag = (e, hashtags, setFieldValue) => {
  let hashtagToAdd = e.target.value;
  if (e.key === "Enter" && hashtagToAdd.length) {
    e.preventDefault()
    if (hashtagToAdd.charAt(0) !== "#") 
      hashtagToAdd = "#" + hashtagToAdd;
      setFieldValue("tags", [...hashtags, hashtagToAdd])
    e.target.value = "";
  }
};

const removeHashtag = (e, hashtags, setFieldValue) => {
  const hashtagToRemove = e.target.parentElement.innerText;
  const removed = hashtags.filter(tag => tag !== hashtagToRemove)
  setFieldValue("tags", removed)
};

export { addHashtag, removeHashtag };
