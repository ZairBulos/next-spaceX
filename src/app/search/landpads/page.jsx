import React from "react";
import { getData } from "@/lib/spacex";
import LandpadList from "@/components/List/LandpadList";

export const metadata = {
  title: "Landpads",
  description: "Learn about SpaceX Landpads.",
};

export default async function Landpads() {
  const data = await getData("landpads");

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Landpads
        </h1>
        <LandpadList landpads={data} />
      </section>
    </main>
  );
}
