"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import { useItem } from "@/hooks/useItem";
import Loader from "@/components/Loader";
import LandpadItem from "@/components/Item/LandpadItem";

export default function Landpad({ params }) {
  const { data, loading, onFetch } = useItem();

  useEffect(() => {
    onFetch("landpads", params.id);
  }, [params.id]);

  return (
    <>
      <Head>
        <title>Next SpaceX - Landpad</title>
      </Head>
      <main>
        <section className="container mx-auto p-10">
          {loading ? <Loader /> : <LandpadItem landpad={data} />}
        </section>
      </main>
    </>
  );
}
