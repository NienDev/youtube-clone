import React from "react";
// import Icon from "../Icon/Icon";

interface GuideItemProps {
  Icon: JSX.Element;
  title: string;
}

const GuideItem = ({ Icon, title }: GuideItemProps) => {
  return (
    <div className="flex xl:flex-row flex-col items-center xl:gap-6 gap-1 hover:bg-[#242526] rounded-xl p-2  cursor-pointer duration-300">
      {Icon}
      <span className="xl:font-medium  xl:text-sm text-[10px] ">{title}</span>
    </div>
  );
};

export default GuideItem;
