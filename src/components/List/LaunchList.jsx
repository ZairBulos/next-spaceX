import React from "react";
import LaunchCard from "../Card/LaunchCard";

function LaunchList({ launches }) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {launches.map((item) => (
        <LaunchCard key={item.id} launch={item} />
      ))}
    </div>
  );
}

export default LaunchList;
