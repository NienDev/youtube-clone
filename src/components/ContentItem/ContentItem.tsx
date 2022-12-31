import React from "react";
import "./ContentItem.css";
interface ContentItemProps {
  thumbnail: string;
  channelImg: string;
  title: string;
  channel: string;
  view: number;
  time: string;
}

const ContentItem = ({
  thumbnail,
  channelImg,
  title,
  channel,
  view,
  time,
}: ContentItemProps) => {
  return (
    <div className=" text-white item-effect rounded-xl cursor-pointer w-full ">
      <img
        className="sm:h-[160px] h-[200px] w-full object-cover object-center rounded-xl mb-4"
        src={thumbnail}
        alt=""
      />
      <div className="flex gap-4 sm:justify-between body items-start">
        <img className="circle" src={channelImg} alt="img" />
        <div className="sm:w-[240px] w-full">
          <div className="font-semibold text-ellipsis overflow-hidden  line-clamp-2">
            {title}
          </div>
          <div className="font-light text-[#aaaaaa]">{channel}</div>
          <div className="font-light text-[#aaaaaa] text-sm flex">
            <span className="mr-1">{view}</span> views -{" "}
            <span className="ml-1">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
