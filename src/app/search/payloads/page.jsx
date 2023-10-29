import React from "react";
import { getData } from "@/lib/spacex";
import PayloadList from "@/components/List/PayloadList";

export const metadata = {
  title: "Payloads",
  description: "Learn about SpaceX Payloads.",
};

export default async function Payloads() {
  const data = await getData("payloads");

  return (
    <main>
      <section className="container mx-auto p-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Payloads
        </h1>
        <PayloadList payloads={data} />
      </section>
    </main>
  );
}
