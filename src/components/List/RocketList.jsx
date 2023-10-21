import React from "react";
import RocketCard from "../Card/RocketCard";

function RocketList({ rockets }) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"
    >
      {rockets.map((item) => (
        <RocketCard key={item.id} rocket={item} />
      ))}
    </div>
  );
}

export default RocketList;
