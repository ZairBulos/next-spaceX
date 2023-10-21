"use client";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import LaunchList from "@/components/List/LaunchList";

function Launches() {
  const { data, loading, onFetch } = useData();

  useEffect(() => {
    onFetch("launches");
  }, []);

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl font-bold text-center mb-10">Launches</h1>
        {loading ? <Loader /> : <LaunchList launches={data} />}
      </section>
    </main>
  );
}

export default React.memo(Launches);
