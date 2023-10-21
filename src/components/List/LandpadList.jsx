import React from "react";
import LandpadCard from "../Card/LandpadCard";

function LandpadList({ landpads }) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
    >
      {landpads.map((item) => (
        <LandpadCard key={item.id} landpad={item} />
      ))}
    </div>
  );
}

export default LandpadList;
