"use client";
import React, { useEffect } from "react";
import { useItem } from "@/hooks/useItem";
import Loader from "@/components/Loader";
import RocketItem from "@/components/Item/RocketItem";

export default function Rocket({ params }) {
  const { data, loading, onFetch } = useItem();

  useEffect(() => {
    onFetch("rockets", params.id);
  }, [params.id]);

  return (
    <main>
      <section className="container mx-auto p-10">
        {loading ? <Loader /> : <RocketItem rocket={data} />}
      </section>
    </main>
  );
}
