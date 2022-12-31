import React from "react";
import GuideItem from "../GuideItem/GuideItem";
import SubscriptionItems from "../SubscriptionItems/SubscriptionItems";
import "./GuideItems.css";

const IconStyle = "h-[28px] w-[28px] text-white ";

// icons
const GuideItems = () => {
  const iconSize = "text-[24px]";
  const imageStyle =
    "h-[24px] w-[24px] object-cover object-center rounded-full";

  const guideItems1 = [
    {
      icon: <i className={`uil uil-home ${iconSize}`}></i>,
      title: "Home",
    },
    {
      icon: (
        <img
          className={IconStyle}
          src="./youtube-shorts.svg"
          alt="youtube-short-icon"
        />
      ),
      title: "Shorts",
    },
    {
      icon: <i className={`uil uil-layers-alt ${iconSize}`}></i>,
      title: "Subscription",
    },
  ];
  const guideItems2 = [
    {
      icon: <i className={`uil uil-layers ${iconSize}`}></i>,
      title: "Library",
    },
    {
      icon: <i className={`uil uil-history ${iconSize}`}></i>,
      title: "History",
    },
    {
      icon: <i className={`uil uil-presentation-play ${iconSize}`}></i>,
      title: "Your Videos",
    },
    {
      icon: <i className={`uil uil-clock ${iconSize}`}></i>,
      title: "Watch Later",
    },
    {
      icon: <i className={`uil uil-thumbs-up ${iconSize}`}></i>,
      title: "Liked Videos",
    },
    {
      icon: <i className={`uil uil-angle-double-down ${iconSize}`}></i>,
      title: "Show more",
    },
  ];

  const SubscriptionItems = [
    {
      icon: <img className={imageStyle} src="./suzy.jpg" alt="suzy-image" />,
      title: "Suzy",
    },
  ];

  const ExploreItems = [
    {
      icon: <i className="uil uil-fire"></i>,
      title: "Trending",
    },
    {
      icon: <i className="uil uil-music-note"></i>,
      title: "Music",
    },
    {
      icon: <i className="uil uil-laptop"></i>,
      title: "Gaming",
    },
    {
      icon: <i className="uil uil-newspaper"></i>,
      title: "News",
    },
  ];

  const underline = "xl:block hidden border-b-[1px] border-[#242526]";
  const underline1 = "border-b-[1px] border-[#242526]";
  const guideTitleStyle = "text-md font-medium my-2";
  return (
    <>
      <section className={`${underline1}`}>
        {guideItems1.map((item) => (
          <GuideItem Icon={item.icon} title={item.title} />
        ))}
      </section>
      <section className={`${underline}`}>
        {guideItems2.map((item) => (
          <GuideItem Icon={item.icon} title={item.title} />
        ))}
      </section>
      <section className={`${underline}`}>
        <h1 className={`${guideTitleStyle}`}>Subscriptions</h1>
        <div className="mb-2">
          {SubscriptionItems.map((item) => (
            <GuideItem Icon={item.icon} title={item.title} />
          ))}
        </div>
      </section>
      <section className={`${underline}`}>
        <h1 className={`${guideTitleStyle}`}>Explore</h1>
        <div className="mb-2">
          {ExploreItems.map((item) => (
            <GuideItem Icon={item.icon} title={item.title} />
          ))}
        </div>
      </section>
    </>
  );
};

export default GuideItems;
