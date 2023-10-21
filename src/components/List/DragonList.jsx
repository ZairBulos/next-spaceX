import React from "react";
import DragonCard from "../Card/DragonCard";

function DragonList({ dragons }) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
    >
      {dragons.map((item) => (
        <DragonCard key={item.id} dragon={item} />
      ))}
    </div>
  );
}

export default DragonList;