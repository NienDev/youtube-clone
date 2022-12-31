import React from "react";

interface SubscriptionItemProps {
  live?: boolean;
  newThing?: boolean;
  title: string;
  url: string;
}
const SubscriptionItem = ({
  live,
  newThing,
  title,
  url,
}: SubscriptionItemProps) => {
  return (
    <div className="flex items-center gap-6 p-[12px] hover:bg-[#242526] rounded-xl duration-300 cursor-pointer relative">
      <img
        className="h-[24px] w-[24px] object-cover object-top rounded-full"
        src={url}
        alt="subscription-image"
      />

      <span className="font-medium text-sm text-ellipsis whitespace-nowrap overflow-hidden w-[100px]">
        {title}
      </span>
      {live && (
        <i className="uil uil-wifi text-[16px] text-[red] absolute right-[16px]"></i>
      )}
      {newThing && (
        <i className="uil uil-map-pin text-[16px] text-[blue] absolute right-[16px]"></i>
      )}
    </div>
  );
};

export default SubscriptionItem;
