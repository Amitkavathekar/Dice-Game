import React from "react";
import { Link } from "react-router-dom";

const TotalScore = ({ score }) => {
  return (
    <div className="">
      <p className="text-8xl font-semibold ml-2">{score}</p>
      <p>TotalScore</p>
    </div>
  );
};

export default TotalScore;
