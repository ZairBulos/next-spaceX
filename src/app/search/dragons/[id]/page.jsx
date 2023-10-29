import React from "react";
import { getItem } from "@/lib/spacex";
import DragonItem from "@/components/Item/DragonItem";

export default async function Dragon({ params }) {
  const data = await getItem("dragons", params.id);

  return (
    <main>
      <section className="container mx-auto p-10">
        <DragonItem dragon={data} />
      </section>
    </main>
  );
}
