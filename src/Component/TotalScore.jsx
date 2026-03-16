import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="">
      <p
        className={`
          font-semibold ml-2
          max-[480px]:text-5xl    /* Small mobile */
          sm:text-7xl             /* Big phones */
          md:text-8xl             /* Tablet */
          lg:text-9xl             /* Laptop */
          xl:text-[10rem]         /* Desktop */
        `.replace(/\s+/g, " ").trim()}
      >
        {score}
      </p>
      <p
        className={`
          mt-2
          max-[480px]:text-base    /* Small mobile */
          sm:text-lg               /* Big phones */
          md:text-xl               /* Tablet */
          lg:text-2xl              /* Laptop */
          xl:text-3xl              /* Desktop */
        `.replace(/\s+/g, " ").trim()}
      >
        TotalScore
      </p>
    </div>
  );
};

export default TotalScore;
