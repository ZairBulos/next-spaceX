import React from "react";
import { getData } from "@/lib/spacex";
import RocketList from "@/components/List/RocketList";

export const metadata = {
  title: "Rockets",
  description: "Learn about SpaceX Rockets."
}

export default async function Rockets() {
  const data = await getData("rockets");

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Rockets
        </h1>
        <RocketList rockets={data} />
      </section>
    </main>
  );
}
