import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Start = () => {
  return (
    <div
      className="
        flex m-auto mt-16
        w-11/12 max-[480px]:flex-col max-[480px]:mt-5
        sm:w-11/12 sm:mt-12
        md:w-10/12 md:mt-14
        lg:w-9/12 lg:mt-16
        xl:w-8/12 xl:mt-20
        "
    >
      {/* Left Side - Image */}
      <img
        className="
          w-[180px] h-[120px]
          max-[480px]:w-[160px] max-[480px]:h-[96px] max-[480px]:m-auto max-[480px]:mb-4
          sm:w-[360px] sm:h-[260px]
          md:w-[500px] md:h-[380px]
          lg:w-[625px] lg:h-[522px]
          xl:w-[700px] xl:h-[558px]
        "
        src="/src/assets/dices 1.png"
        alt="Dice"
      />

      {/* Right Side - Text and Button */}
      <div className="
          flex flex-col w-full items-center justify-center
          max-[480px]:w-full
        ">
        <p className="
            font-bold capitalize
            w-[180px] text-4xl
            max-[480px]:w-[160px] max-[480px]:text-3xl
            sm:w-[300px] sm:text-6xl
            md:w-[400px] md:text-7xl
            lg:w-[535px] lg:text-8xl
            xl:w-[600px] xl:text-8xl
         ">
          dice game
        </p>
        <Link to="/gameplay">
          <Button
            text="play now"
            className="
              ml-0 mt-4
              max-[480px]:w-full max-[480px]:mt-4 max-[480px]:ml-0
              sm:ml-8
              md:ml-14
              lg:ml-16
              xl:ml-20
              hover:bg-white hover:text-black hover:border-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Start;
