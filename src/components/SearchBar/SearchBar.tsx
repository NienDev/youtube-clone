import React from "react";
import { useState } from "react";
import Icon from "../Icon/Icon";

const SearchBar = () => {
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState("");

  const handleFocus = () => {
    setFocus(true);
  };

  const handleOutFocus = () => {
    setFocus(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  const borderActive =
    "pl-4 border-[#0d6ebd] border-l-[1px] border-t-[1px] border-b-[1px] rounded-l-full";
  const borderNormal =
    "border-t-[1px] border-b-[1px] border-l-[1px] rounded-l-full border-[#3d3d3d] ";
  return (
    <div className="flex max-w-[520px] w-full mx-auto">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="py-[0px]  pl-4 w-full flex "
      >
        <div
          className={`flex items-center flex-1 justify-between  ${
            focus ? borderActive : borderNormal
          }`}
        >
          <div className={`flex flex-1 h-full items-center `}>
            {focus && <i className={`text-white uil uil-search `}></i>}
            <input
              type="text"
              className={` pl-4 focus:outline-none bg-[#0f0f0f] flex-1 h-full text-[#aaaaaa] bg-transparent`}
              placeholder="Search"
              onFocus={() => handleFocus()}
              onBlur={() => handleOutFocus()}
              value={input}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {input && <Icon handleClick={handleClick} name="uil uil-times" />}
        </div>
        <button className="bg-[#222222] px-4 py-2 rounded-r-full ">
          <i className="text-[#fff] fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
