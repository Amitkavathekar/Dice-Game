import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";

const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

const Roledice = ({ currentDice, rollDice }) => {
  return (
    <div>
      <div className="flex justify-center mt-2">
        <img
          src={diceImages[currentDice]}
          alt={`Dice ${currentDice}`}
          onClick={rollDice}
          className={`
            cursor-pointer
            max-[480px]:w-20 max-[480px]:h-20
            sm:w-24 sm:h-24
            md:w-28 md:h-28
            lg:w-32 lg:h-32
            xl:w-40 xl:h-40
          `.replace(/\s+/g, " ").trim()}
        />
      </div>
      <p className="text-center w-auto text-xl font-semibold mt-4">
        Click on Dice to roll
      </p>
    </div>
  );
};

export default Roledice;
