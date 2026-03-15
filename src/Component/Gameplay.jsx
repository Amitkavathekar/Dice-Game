import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import Roledice from "./Roledice";
import React, { useState } from "react";
import Button from "./Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [rules, setRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(0);
    setCurrentDice(1);
    setError("");
    setRules(false);
    console.log("Score reset");
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }

    setSelectedNumber(undefined);
  };

  return (
    <div className="w-9/12 h-8/12 m-auto mt-2">
      <div className="flex justify-between">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <Roledice currentDice={currentDice} rollDice={rollDice} />

      <div className="flex flex-col justify-center items-center mt-10">
        <Button
          onClick={resetScore}
          className="!text-black bg-transparent border-gray-600 border-2"
          text="Reset"
        />
        <Button
          onClick={() => setRules((prev) => !prev)}
          text={rules ? "Hide Rules" : "Show Rules"}
          className="!text-white hover:!text-black hover:!bg-white border-gray-600 border-2"
        />
      </div>

      {rules && <Rules />}
    </div>
  );
};

export default Gameplay;
