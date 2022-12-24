import React from "react";
import "./Icon.css";

const Icon = ({ name }) => {
  return (
    <button className="inline hover:bg-[#212121] h-[36px] w-[36px] p-[8px] rounded-[50%] flex items-center justify-center duration-300 transition-[background-color] ">
      <i className={`text-white + ${name}`}></i>
    </button>
  );
};

export default Icon;
