"use client";
import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next SpaceX</title>
        <meta
          name="description"
          content="Explore SpaceX - Where Space Meets Innovation"
        />
      </Head>
      <main className="bg-gradient-to-b from-gray-950/5 via-gray-900/75 to-black">
        <Hero />
        <About />
      </main>
    </>
  );
}
