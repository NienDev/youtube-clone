import React from "react";
import ContentItem from "../ContentItem/ContentItem";
import "./Content.css";
import { clips } from "../Data/clips";
const Contents = () => {
  return (
    <div className="grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 pb-[250px] xl:w-auto md:w-[90%] w-[80%] mx-auto ">
      {clips.map((clip) => (
        <ContentItem
          thumbnail={clip.thumbnail}
          channelImg={clip.channelImg}
          title={clip.title}
          channel={clip.channel}
          view={clip.view}
          time={clip.time}
        />
      ))}
    </div>
  );
};

export default Contents;
