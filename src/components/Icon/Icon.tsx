import React from "react";
import "./Icon.css";

interface IconProps {
  name: string;
  bgColor?: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Icon = ({ name, bgColor, handleClick }: IconProps) => {
  return (
    <button
      onClick={() => handleClick()}
      className={`inline hover:bg-[#3a3b3c] text-[20px] h-[40px] w-[40px] p-[8px] rounded-[50%] flex items-center justify-center duration-300 transition-[background-color] ${bgColor}`}
    >
      <i className={`text-white  ${name}`}></i>
    </button>
  );
};

export default Icon;
