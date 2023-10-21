"use client";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import LandpadList from "@/components/List/LandpadList";

function Landpads() {
  const { data, loading, onFetch } = useData();

  useEffect(() => {
    onFetch("landpads");
  }, []);

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl font-bold text-center mb-10">Landpads</h1>
        {loading ? <Loader /> : <LandpadList landpads={data} />}
      </section>
    </main>
  );
}

export default React.memo(Landpads);
