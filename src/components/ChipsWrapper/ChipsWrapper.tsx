import React from "react";
import ChipItem from "../ChipItem/ChipItem";
import "../Scrollbar/Scollbar.css";
import { useHorizontalScroll } from "../Scrollbar/Scrollbar";
import { chipsData } from "../Data/chipsdata";
const ChipsWrapper = () => {
  const scrollRef = useHorizontalScroll();
  return (
    <div
      className="flex gap-2 overflow-y-scroll scrollbar-style sticky top-0 bg-[black] z-10 py-3 "
      ref={scrollRef}
    >
      {chipsData.map((item) => (
        <ChipItem active={item.active} title={item.title} />
      ))}
    </div>
  );
};

export default ChipsWrapper;
