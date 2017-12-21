import React from "react";
import Radium from "radium";
// import "./CharComponent.css";

const CharComponent = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    borderRadius: "5px",
    verticalAlign: "top",
    ":hover": {
      cursor: "pointer",
      background: "#ddddff"
    }
  };
  return (
    <div>
      {props.phrase.split("").map((p, index) => {
        return (
          <p
            style={style}
            key={index}
            onClick={evt => {
              return props.clickHandler(index);
            }}>
            {p}
          </p>
        );
      })}
    </div>
  );
};

export default Radium(CharComponent);
