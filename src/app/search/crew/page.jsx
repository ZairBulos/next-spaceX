"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import CrewList from "@/components/List/CrewList";

export default function Crew() {
  const { data, loading, onFetch } = useData();

  useEffect(() => {
    onFetch("crew");
  }, []);

  return (
    <>
      <Head>
        <title>Next SpaceX - Crew</title>
        <meta name="description" content="Learn about SpaceX Crew" />
      </Head>
      <main>
        <section className="container mx-auto p-10">
          <h1 className="text-4xl font-bold text-center mb-10">Crew</h1>
          {loading ? <Loader /> : <CrewList crew={data} />}
        </section>
      </main>
    </>
  );
}
