import React from "react";
import CoreCard from "../Card/CoreCard";

function CoreList({ cores }) {
  return (
    <div
      role="list" 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {cores.map((item) => (
        <CoreCard key={item.id} core={item} />
      ))}
    </div>
  );
}

export default CoreList;
