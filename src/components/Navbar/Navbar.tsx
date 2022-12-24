import React from "react";
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";

// remind
// create icon container style

const Navbar = () => {
  return (
    <div className="h-[56px] w-full bg-[#0f0f0f] px-[16px] flex items-center">
      <Icon name="fa-solid fa-bars" />
      <div className="text-white cursor-pointer">
        <img className="bg-cover h-[32px] " src="./YoutubeBrand.png" alt="" />
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
