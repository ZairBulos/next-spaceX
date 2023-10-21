"use client";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import RocketList from "@/components/List/RocketList";

function Rockets() {
  const { data, loading, onFetch } = useData();

  useEffect(() => {
    onFetch("rockets");
  }, []);

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl font-bold text-center mb-10">Rockets</h1>
        {loading ? <Loader /> : <RocketList rockets={data} />}
      </section>
    </main>
  );
}

export default React.memo(Rockets);
