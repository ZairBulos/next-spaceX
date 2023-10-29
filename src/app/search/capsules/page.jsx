import React from "react";
import { getData } from "@/lib/spacex";
import CapsuleList from "@/components/List/CapsuleList";

export const metadata = {
  title: "Capsules",
  description: "Learn about SpaceX Capsules."
}

export default async function Capsules() {
  const data = await getData("capsules");
  
  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Capsules
        </h1>
        <CapsuleList capsules={data} />
      </section>
    </main>
  );
}
