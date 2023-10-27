"use client";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import CapsuleList from "@/components/List/CapsuleList";

export default function Capsules() {
  const { data, loading, onFetch } = useData();

  useEffect(() => {
    onFetch("capsules");
  }, []);

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Capsules
        </h1>
        {loading ? <Loader /> : <CapsuleList capsules={data} />}
      </section>
    </main>
  );
}
