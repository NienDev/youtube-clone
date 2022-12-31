import React from "react";
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";
import UserImgContainer from "../UserImgContainer/UserImgContainer";

// remind
// create icon container style

const Navbar = () => {
  return (
    <div className="h-[56px] w-full bg-[#0f0f0f] px-[16px] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon name="fa-solid fa-bars" />
        <div className="text-white cursor-pointer">
          <img className="bg-cover h-[32px] " src="./YoutubeBrand.png" alt="" />
        </div>
      </div>
      <div className="hidden sm:flex flex-1 ">
        <SearchBar />
        <Icon name="uil uil-microphone" bgColor="bg-[#18191a]" />
      </div>
      <div className="flex">
        <Icon name="uil uil-video" />
        <Icon name="uil uil-bell" />
        <UserImgContainer url="./me_you.jpg" />
      </div>
    </div>
  );
};

export default Navbar;
