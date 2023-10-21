import React from "react";
import LauncheCard from "../Card/LauncheCard";

function LaunchesList({ launches }) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {launches.map((item) => (
        <LauncheCard key={item.id} launche={item} />
      ))}
    </div>
  );
}

export default LaunchesList;
