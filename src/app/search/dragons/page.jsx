"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import DragonList from "@/components/List/DragonList";

export default function Dragons() {
  const { data, loading, onFetch } = useData();

  useEffect(() => {
    onFetch("dragons");
  }, []);

  return (
    <>
      <Head>
        <title>Next SpaceX - Dragons</title>
        <meta name="description" content="Learn about SpaceX Dragons" />
      </Head>
      <main>
        <section className="container mx-auto p-10">
          <h1 className="text-4xl font-bold text-center mb-10">Dragons</h1>
          {loading ? <Loader /> : <DragonList dragons={data} />}
        </section>
      </main>
    </>
  );
}
