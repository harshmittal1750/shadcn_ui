import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";

function Banner() {
  return (
    <div className="h-screen ">
      <div className="p-20 bg-yellow-100 dark:bg-yellow-300  h-96 w-auto rounded-s-full mt-16 border-yellow-200 dark:border-yellow-500 border-4">
        <ProfileCard />
      </div>
    </div>
  );
}

export default Banner;
