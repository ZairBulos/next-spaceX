"use client";
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-950/5 via-gray-900/75 to-black">
      <Hero />
      <About />
    </main>
  );
}
