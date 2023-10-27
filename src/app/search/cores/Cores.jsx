"use client";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import CoreList from "@/components/List/CoreList";

export default function Cores() {
  const { data, loading, onFetch } = useData();

  useEffect(() => {
    onFetch("cores");
  }, []);

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Cores
        </h1>
        {loading ? <Loader /> : <CoreList cores={data} />}
      </section>
    </main>
  );
}
