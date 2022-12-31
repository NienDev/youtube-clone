import React from "react";

interface UserImgContainerProps {
  url: string;
}

const UserImgContainer = ({ url }: UserImgContainerProps) => {
  return (
    <div className="rounded-full h-[40px] w-[40px] overflow-hidden cursor-pointer">
      <img className="w-full h-full object-cover" src={url} alt="user-image" />
    </div>
  );
};

export default UserImgContainer;
