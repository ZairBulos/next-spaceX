"use client";
import Head from "next/head";
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
    <>
      <Head>
        <title>Next SpaceX - Capsules</title>
        <meta name="description" content="Learn about SpaceX Capsules" />
      </Head>
      <main>
        <section className="container mx-auto p-10">
          <h1 className="text-4xl font-bold text-center mb-10">Capsules</h1>
          {loading ? <Loader /> : <CapsuleList capsules={data} />}
        </section>
      </main>
    </>
  );
}
