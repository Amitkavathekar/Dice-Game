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
      className={`p-2 w-40 text-center mt-4 rounded ${bgColor} ${textColor} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
