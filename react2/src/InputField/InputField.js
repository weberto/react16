import React from "react";
import "./InputField.css";

const UserInput = props => {
  const style = {
    marginLeft: "20px",
    color: "lightblue"
  };
  return (
    <div className="UserInput">
      <h3 className="center">Phrase Counter</h3>
      <span className="subscriber_input">phrase</span>
      <input type="text" onChange={props.f1} value={props.phrase} />
      <span style={style}>{props.phrase.length}</span>
      {props.children}
    </div>
  );
};

export default UserInput;
