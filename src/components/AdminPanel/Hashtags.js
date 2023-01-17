/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import closeTag from "../../assets/close.svg";
import { addHashtag, removeHashtag } from "../../utils/handleHashtags";

const Hashtags = ({ valueTags, setFieldValue }) => {
  return (
    <div className="hashtags">
      {valueTags.map((tag) => (
        <span key={tag + Math.random()}>
          {tag}
          <img src={closeTag} alt="x" onClick={(e) => removeHashtag(e, valueTags, setFieldValue)} />
        </span>
      ))}
      <input
        type="text"
        placeholder="type hashtag and press enter..."
        onKeyDown={(e) => addHashtag(e, valueTags, setFieldValue)}
      />
    </div>
  );
};

export default Hashtags;
