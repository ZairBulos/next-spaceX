"use client";
import React, { useEffect } from "react";
import { useItem } from "@/hooks/useItem";
import Loader from "@/components/Loader";
import DragonItem from "@/components/Item/DragonItem";

function Dragon({ params }) {
  const { data, loading, onFetch } = useItem();

  useEffect(() => {
    onFetch("dragons", params.id);
  }, [params.id]);

  return (
    <main>
      <section className="container mx-auto p-10">
        {loading ? <Loader /> : <DragonItem dragon={data} />}
      </section>
    </main>
  );
}

export default Dragon;
