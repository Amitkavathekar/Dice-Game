import React from "react";

const Rules = () => {
  return (
    <div
      style={{ backgroundColor: "#FBF1F1" }}
      className="w-8/12 rounded-xl m-auto pl-7 mt-5 p-4"
    >
      <p className="text-2xl font-semibold">How to play dice game</p>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        After clicking the dice, if your selected number equals the dice number,
        you get the same points as the dice.
      </p>
      <p>If your guess is wrong, 2 points will be deducted.</p>
    </div>
  );
};

export default Rules;
