"use client";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import CrewCard from "@/components/CrewCard";

function CrewList() {
  const { data, loading, onChangeComponent } = useData();

  useEffect(() => {
    onChangeComponent("crew");
  }, [onChangeComponent]);

  return (
    <main className="container mx-auto p-10">
      <div className="text-center pb-10">
        <h1 className="text-4xl md:text-5xl font-bold">Crew</h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
        >
          {data.map((item) => (
            <CrewCard key={item.name} member={item} />
          ))}
        </div>
      )}
    </main>
  );
}

export default React.memo(CrewList);
