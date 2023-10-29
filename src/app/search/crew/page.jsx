import React from "react";
import { getData } from "@/lib/spacex";
import CrewList from "@/components/List/CrewList";

export const metadata = {
  title: "Crew",
  description: "Learn about SpaceX Crew.",
};

export default async function Crew() {
  const data = await getData("crew");

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Crew
        </h1>
        <CrewList crew={data} />
      </section>
    </main>
  );
}
