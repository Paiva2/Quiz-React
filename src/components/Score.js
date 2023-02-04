import React from "react";
import "./styles/Score.css";

const Score = ({ score, questionNum }) => {
  return (
    <div className="footer">
      <p>Score: {score}</p>
      <p>Question {questionNum}/7</p>
    </div>
  );
};

export default Score;
