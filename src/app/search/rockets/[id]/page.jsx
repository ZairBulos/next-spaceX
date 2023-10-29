import React from "react";
import RocketItem from "@/components/Item/RocketItem";
import { getItem } from "@/lib/spacex";

export default async function Rocket({ params }) {
  const data = await getItem("rockets", params.id);

  return (
    <main>
      <section className="container mx-auto p-10">
        <RocketItem rocket={data} />
      </section>
    </main>
  );
}
