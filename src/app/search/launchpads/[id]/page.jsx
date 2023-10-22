"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import { useItem } from "@/hooks/useItem";
import Loader from "@/components/Loader";
import LaunchpadItem from "@/components/Item/LaunchpadItem";

export default function Landpad({ params }) {
  const { data, loading, onFetch } = useItem();

  useEffect(() => {
    onFetch("launchpads", params.id);
  }, [params.id]);

  return (
    <>
      <Head>
        <title>Next SpaceX - Launchpad</title>
      </Head>
      <main>
        <section className="container mx-auto p-10">
          {loading ? <Loader /> : <LaunchpadItem launchpad={data} />}
        </section>
      </main>
    </>
  );
}
