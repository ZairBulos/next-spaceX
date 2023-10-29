import React from "react";
import { getItem } from "@/lib/spacex";
import LaunchItem from "@/components/Item/LaunchItem";

export default async function Launch({ params }) {
  const data = await getItem("launches", params.id);

  return (
    <main>
      <section className="container mx-auto p-10">
        <LaunchItem launch={data} />
      </section>
    </main>
  );
}
