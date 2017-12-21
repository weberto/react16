import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p className="customer_news">
        Here is your custom news:{" "}
        <span className="subscriber">{props.name}</span>
      </p>
      <h3>{props.h1}</h3>
      <p>{props.p1}</p>
      <p>{props.p2}</p>
    </div>
  );
};

export default UserOutput;
