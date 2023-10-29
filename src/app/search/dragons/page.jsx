import React from "react";
import { getData } from "@/lib/spacex";
import DragonList from "@/components/List/DragonList";

export const metadata = {
  title: "Dragons",
  description: "Learn about SpaceX Dragons.",
};

export default async function Dragons() {
  const data = await getData("dragons");

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Dragons
        </h1>
        <DragonList dragons={data} />
      </section>
    </main>
  );
}
