"use client";
import Head from "next/head";
import React, { useEffect } from "react";
import { useData } from "@/hooks/useData";
import Loader from "@/components/Loader";
import LandpadList from "@/components/List/LandpadList";

export default function Landpads() {
  const { data, loading, onFetch } = useData();

  useEffect(() => {
    onFetch("landpads");
  }, []);

  return (
    <>
      <Head>
        <title>Next SpaceX - Landpads</title>
        <meta name="description" content="Learn about SpaceX Landpads" />
      </Head>
      <main>
        <section className="container mx-auto p-10">
          <h1 className="text-4xl font-bold text-center mb-10">Landpads</h1>
          {loading ? <Loader /> : <LandpadList landpads={data} />}
        </section>
      </main>
    </>
  );
}
