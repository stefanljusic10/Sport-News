import React from "react";

const FormattedText = ({ clickedNews }) => {
  const text = clickedNews?.text.replace(/\. {2}/g, ". zkzkzk").split("zkzkzk");

  const introSentence = text ? text[0] : "";
  const lastSentence = text && text.length > 1 ? text[text.length - 1] : "";
  const midText = text ? text.slice(1, text.length - 1) : [];
  const midSentence = midText.reduce((acc, curr) => acc + curr, "");

  return (
    <>
      <p>{introSentence}</p>
      <p>{midSentence}</p>
      <p>{lastSentence}</p>
    </>
  );
};

export default FormattedText;
