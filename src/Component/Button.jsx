import React from "react";

const Button = ({
  text,
  onClick,
  className = "",
  textColor = "text-white",
  bgColor = "bg-black",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        p-2
        w-40
        text-center
        mt-4
        rounded
        max-[480px]:w-32   /* Small mobile */
        sm:w-36            /* Big phones */
        md:w-44            /* Tablet */
        lg:w-48            /* Laptop */
        xl:w-56            /* Desktop */
        ${bgColor}
        ${textColor}
        ${className}
      `.replace(/\s+/g, " ").trim()}
    >
      {text}
    </button>
  );
};

export default Button;
