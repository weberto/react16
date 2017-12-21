import React from "react";

const ValidationComponent = props => {
  const phraseError = {
    fontSize: "80%",
    fontStyle: "italic"
  };
  let phrase = null;
  if (props.phrase.length < 5)
    phrase = <p style={phraseError}>Phrase must be minimum of 5 characters</p>;
  if (props.phrase.length > 10)
    phrase = <p style={phraseError}>Phrase Maximun length is 10 characters</p>;
  return phrase;
};

export default ValidationComponent;
