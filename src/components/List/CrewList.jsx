import React from "react";
import CrewCard from "../Card/CrewCard";

function CrewList({ crew }) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {crew.map((item) => (
        <CrewCard key={item.id} member={item} />
      ))}
    </div>
  );
}

export default CrewList;
