import React from "react";

const FormattedText = ({ clickedNews }) => {
  const text = clickedNews?.text || ""

  return (
    <div id="formattedText">
      <p>{text}</p>
    </div>
  );
};

export default FormattedText;
