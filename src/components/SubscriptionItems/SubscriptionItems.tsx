import React from "react";
import GuideItem from "../GuideItem/GuideItem";
import { ShowMoreIcon } from "../GuideItems/GuideItems";
import SubscriptionItem from "../SubscriptionItem/SubscriptionItem";

interface ExploreItemsProps {
  icon: JSX.Element;
  title: string;
}

interface SubscriptionItemsProps {
  title: string;
  items: ExploreItemsProps[];
}
const SubscriptionItems = ({ title, items }: SubscriptionItemsProps) => {
  return (
    <div className="pt-2 border-t-[1px] border-[#242526]">
      <h1 className="text-md mb-2 px-2">{title}</h1>
      <div className="flex flex-col gap-4">
        {/* <SubscriptionItem
          url="./suzy.jpg"
          title="Suzyaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          live={true}
        /> */}
        {/* <GuideItem Icon={ShowMoreIcon} title="Show more" /> */}
        {items.map((item) => (
          <GuideItem Icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionItems;
