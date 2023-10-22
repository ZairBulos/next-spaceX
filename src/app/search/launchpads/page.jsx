"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import LaunchpadList from "@/components/List/LaunchpadList";

export default function Launchpads() {
  const { data, loading, onFetch } = useData();

  useEffect(() => {
    onFetch("launchpads");
  }, []);

  return (
    <>
      <Head>
        <title>Next SpaceX - Launchpads</title>
        <meta name="description" content="Learn about SpaceX Launchpads" />
      </Head>
      <main>
        <section className="container mx-auto p-10">
          <h1 className="text-4xl font-bold text-center mb-10">Launchpads</h1>
          {loading ? <Loader /> : <LaunchpadList launchpads={data} />}
        </section>
      </main>
    </>
  );
}
