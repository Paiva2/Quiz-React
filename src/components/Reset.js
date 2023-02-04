import React from "react";
import "./styles/Reset.css";

const Reset = ({ score, restart }) => {
  return (
    <div className="container">
      <div>
        <h2>Final score: {score}/70</h2>
        <p>Click below to start again!</p>
      </div>
      <button className="reset-btn" onClick={restart}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
