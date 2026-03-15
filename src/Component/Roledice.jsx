const Roledice = ({ currentDice, rollDice }) => {
  return (
    <div>
      <div className="flex justify-center mt-2">
        <img
          src={`/src/assets/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
          onClick={rollDice} // ✅ Correct function
          className="cursor-pointer w-32 h-32"
        />
      </div>
      <p className="text-center w-auto text-xl font-semibold mt-4">
        Click on Dice to roll
      </p>
    </div>
  );
};

export default Roledice;
