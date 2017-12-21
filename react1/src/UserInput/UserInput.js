import React from "react";
import "./UserInput.css";

const UserInput = props => {
  /**
  const styles = {
    margin: "5px auto",
    color: "blue"
  };
    <div style={styles}>
  */
  return (
    <div className="UserInput">
      <h3 className="center">New York Times Subscriber Information</h3>
      <span className="subscriber_input">Subscriber name</span>
      <input type="text" onChange={props.f1} value={props.name} />
    </div>
  );
};

export default UserInput;
