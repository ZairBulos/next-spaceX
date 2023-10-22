"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import { useItem } from "@/hooks/useItem";
import Loader from "@/components/Loader";
import LaunchItem from "@/components/Item/LaunchItem";

export default function Launch({ params }) {
  const { data, loading, onFetch } = useItem();

  useEffect(() => {
    onFetch("launches", params.id);
  }, [params.id]);

  return (
    <>
      <Head>
        <title>Next SpaceX - Launch</title>
      </Head>
      <main>
        <section className="container mx-auto p-10">
          {loading ? <Loader /> : <LaunchItem launch={data} />}
        </section>
      </main>
    </>
  );
}
