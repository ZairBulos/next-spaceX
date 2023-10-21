"use client";
import React, { useEffect } from "react";
import { useItem } from "@/hooks/useItem";
import Loader from "@/components/Loader";
import LaunchpadItem from "@/components/Item/LaunchpadItem";

function Landpad({ params }) {
  const { data, loading, onFetch } = useItem();

  useEffect(() => {
    onFetch("launchpads", params.id);
  }, [params.id]);

  return (
    <main>
      <section className="container mx-auto p-10">
        {loading ? <Loader /> : <LaunchpadItem launchpad={data} />}
      </section>
    </main>
  );
}

export default Landpad;
