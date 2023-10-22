"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import PayloadList from "@/components/List/PayloadList";

export default function Payloads() {
  const { data, loading, onFetch } = useData();

  useEffect(() => {
    onFetch("payloads");
  }, []);

  return (
    <>
      <Head>
        <title>Next SpaceX - Payloads</title>
        <meta name="description" content="Learn about SpaceX Payloads" />
      </Head>
      <main>
        <section className="container mx-auto p-10">
          <h1 className="text-4xl font-bold text-center mb-10">Payloads</h1>
          {loading ? <Loader /> : <PayloadList payloads={data} />}
        </section>
      </main>
    </>
  );
}
