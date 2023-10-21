import React from "react";
import LaunchpadCard from "../Card/LaunchpadCard";

function LaunchpadList({ launchpads }) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
    >
      {launchpads.map((item) => (
        <LaunchpadCard key={item.id} launchpad={item} />
      ))}
    </div>
  );
}

export default LaunchpadList;
