import React from "react";

interface ChipItemProps {
  active: boolean;
  title: string;
}

const ChipItem = ({ title, active }: ChipItemProps) => {
  return (
    <div className="h-fit whitespace-nowrap px-4 py-1 text-white bg-[#3a3b3c] hover:bg-[#b0b3b8] hover:text-[black] duration-300 rounded-md cursor-pointer">
      {title}
    </div>
  );
};

export default ChipItem;
