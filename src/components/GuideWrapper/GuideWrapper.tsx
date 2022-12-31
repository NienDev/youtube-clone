import React from "react";
import GuideItems from "../GuideItems/GuideItems";
import "../Scrollbar/Scollbar.css";

const GuideWrapper = () => {
  return (
    <div className="xl:w-[240px] w-[64px] bg-black text-white xl:px-4 h-full overflow-y-auto scrollbar-style md:block hidden">
      <GuideItems />
    </div>
  );
};

export default GuideWrapper;
