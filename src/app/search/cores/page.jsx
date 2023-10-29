import React from "react";
import { getData } from "@/lib/spacex";
import CoreList from "@/components/List/CoreList";

export const metadata = {
  title: "Cores",
  description: "Learn about SpaceX Cores."
}

export default async function Cores() {
  const data = await getData("cores");

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Cores
        </h1>
        <CoreList cores={data} />
      </section>
    </main>
  );
}
