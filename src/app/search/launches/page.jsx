import React from "react";
import { getData } from "@/lib/spacex";
import LaunchList from "@/components/List/LaunchList";

export const metadata = {
  title: "Launches",
  description: "Learn about SpaceX Launches.",
};

export default async function Launches() {
  const data = await getData("launches");

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Launches
        </h1>
        <LaunchList launches={data} />
      </section>
    </main>
  );
}
