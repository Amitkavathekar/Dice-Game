import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Start = () => {
  return (
    <div className="w-9/12 flex m-auto mt-16">
      {/* Left Side - Image */}
      <img
        className="w-[625px] h-[522px]"
        src="/src/assets/dices 1.png"
        alt="Dice"
      />

      {/* Right Side - Text and Button */}
      <div className="flex flex-col w-full items-center justify-center">
        <p className="w-[535px] font-bold text-8xl capitalize">dice game</p>

        <Link to="/gameplay">
          <Button
            text="play now"
            className="ml-85 hover:bg-white hover:text-black hover:border-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Start;
