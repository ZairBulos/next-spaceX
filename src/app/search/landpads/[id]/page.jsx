import React from "react";
import { getItem } from "@/lib/spacex";
import LandpadItem from "@/components/Item/LandpadItem";

export default async function Landpad({ params }) {
  const data = await getItem("landpads", params.id);

  return (
    <main>
      <section className="container mx-auto p-10">
        <LandpadItem landpad={data} />
      </section>
    </main>
  );
}
