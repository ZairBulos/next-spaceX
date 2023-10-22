"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import { useItem } from "@/hooks/useItem";
import Loader from "@/components/Loader";
import DragonItem from "@/components/Item/DragonItem";

export default function Dragon({ params }) {
  const { data, loading, onFetch } = useItem();

  useEffect(() => {
    onFetch("dragons", params.id);
  }, [params.id]);

  return (
    <>
      <Head>
        <title>Next SpaceX - Dragon</title>
      </Head>
      <main>
        <section className="container mx-auto p-10">
          {loading ? <Loader /> : <DragonItem dragon={data} />}
        </section>
      </main>
    </>
  );
}
