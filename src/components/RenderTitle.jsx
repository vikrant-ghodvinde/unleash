import React from "react";

const StyledSentence = ({ sentence, color, textSize }) => {
  // console.log(sentence);
  const parseSentence = (sentence) => {
    const parts = sentence.split(/(<\/?[ibc]>)/); // Split the sentence while keeping the tags
    let styledParts = [];
    let bTagOpened = false;
    let cTagOpened = false; // Track if <c> tag is open
    let currentColor = ""; // Track the current color
    let iTagOpened = false; // Track if <i> tag is open

    // Define the thresholds for different textSize values
    const thresholds = {
      small: 720,
      medium: 600,
      big: 480,
      extraBig: 360,
    };

    // Check if the sentence is longer than the threshold for the current textSize
    const threshold = thresholds[textSize];
    const isLongSentence = sentence.length > threshold;

    parts.forEach((part, index) => {
      if (part === "<c>") {
        cTagOpened = true;
      } else if (part === "</c>") {
        cTagOpened = false;
        currentColor = ""; // Reset the color when </c> tag is encountered
      } else if (part === "<i>") {
        iTagOpened = true; // Set the <i> tag as open
      } else if (part === "</i>") {
        iTagOpened = false; // Set the <i> tag as closed
      } else if (part === "<b>") {
        bTagOpened = true;
      } else if (part === "</b>") {
        bTagOpened = false;
      } else if (part.trim() !== "") {
        // If it's not a tag
        if (cTagOpened) {
          // Apply color only within <c> tags
          styledParts.push(
            <span key={index} style={{ color: color }}>
              {part}
            </span>
          );
        } else if (iTagOpened) {
          // If <i> tag is open, wrap content with italic style
          styledParts.push(
            <span key={index} style={{ fontStyle: "italic" }}>
              {part}
            </span>
          );
        } else if (bTagOpened) {
          // If <b> tag is open, wrap content with bold style
          styledParts.push(
            <span key={index} style={{ fontWeight: "bold" }}>
              {part}
            </span>
          );
        } else if (isLongSentence && index === 0) {
          // If the sentence is long than highlight with red color
          styledParts.push(
            <span key={index}>{part.substr(0, threshold)}</span>
          );
          styledParts.push(
            <span key={index + 1} style={{ backgroundColor: "red" }}>
              {part.substr(threshold)}
            </span>
          );
        } else {
          // If neither <c> nor <i> tag is open, render plain text
          styledParts.push(<span key={index}>{part}</span>);
        }
      }
    });

    return styledParts;
  };

  return <div className="mb-2">{parseSentence(sentence)}</div>;
};

export default StyledSentence;
