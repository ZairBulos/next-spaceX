import React from "react";
import { getItem } from "@/lib/spacex";
import LaunchpadItem from "@/components/Item/LaunchpadItem";

export default async function Landpad({ params }) {
  const data = await getItem("launchpads", params.id);

  return (
    <main>
      <section className="container mx-auto p-10">
        <LaunchpadItem launchpad={data} />
      </section>
    </main>
  );
}
