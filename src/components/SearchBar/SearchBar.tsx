import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <form className="py-[6px] border-[1px] border-[#3d3d3d] rounded-l-full pl-4">
        <input
          type="text"
          className="focus:outline-none bg-[#0f0f0f] text-[#aaaaaa] max-w-[520px]"
          placeholder="Search"
        />
      </form>
      <button className="bg-[#222222] px-4 py-2 rounded-r-full">
        <i class="text-[#fff] fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;
