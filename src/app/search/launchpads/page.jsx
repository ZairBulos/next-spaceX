import React from "react";
import { getData } from "@/lib/spacex";
import LaunchpadList from "@/components/List/LaunchpadList";

export const metadata = {
  title: "Launchpads",
  description: "Learn about SpaceX Launchpads.",
};

export default async function Launchpads() {
  const data = await getData("launchpads");

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Launchpads
        </h1>
        <LaunchpadList launchpads={data} />
      </section>
    </main>
  );
}
