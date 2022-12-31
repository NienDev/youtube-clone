import React from "react";
import { useState } from "react";
import "./ResponsiveSearchBar.css";
const ResponsiveSearchBar = () => {
  const [open, setOpen] = useState(false);

  const handleClicked = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={`relative h-[55px] ${
        open ? "max-w-[360px]" : "max-w-[60px]"
      } w-full  rounded-md effect shadow-xl bg-white`}
    >
      <input
        type="text"
        className={`rounded-md text-[16px] font-normal focus:outline-none relative h-full w-full  ${
          open ? "pl-[15px] " : "px-[15px] hidden"
        }`}
        placeholder="Search..."
      />
      {!open ? (
        <span
          onClick={() => handleClicked()}
          className={`cursor-pointer absolute left  -0 top-0 h-full w-[60px] flex items-center justify-center bg-[white] rounded-md`}
        >
          <i className="uil uil-search text-[30px] text-[#4070f4]"></i>
        </span>
      ) : (
        <span
          onClick={() => handleClicked()}
          className="absolute right-[-45px] top-[50%] translate-y-[-50%] cursor-pointer"
        >
          <i className="uil uil-multiply text-[30px] text-[white]"></i>
        </span>
      )}
    </div>
  );
};

export default ResponsiveSearchBar;
