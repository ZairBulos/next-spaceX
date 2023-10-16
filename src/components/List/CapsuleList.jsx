import React from "react";
import CapsuleCard from "../Card/CapsuleCard";

function CapsuleList({ capsules }) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {capsules.map((item) => (
        <CapsuleCard key={item.id} capsule={item} />
      ))}
    </div>
  );
}

export default CapsuleList;
