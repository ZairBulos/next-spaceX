"use client";
import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Next SpaceX - About</title>
        <meta
          name="description"
          content="Learn about Next SpaceX, a powerful web application providing comprehensive information about SpaceX."
        />
      </Head>
      <main>
        <section className="flex justify-center py-8 min-h-[82vh]">
          <div className="lg:w-[1024px] border rounded-lg p-10 shadow-lg shadow-white">
            <h1 className="text-center text-4xl font-bold leading-loose mb-4">
              About Next SpaceX
            </h1>
            <p className="text-justify">
              Next SpaceX is a powerful web application designed to provide you
              with comprehensive information about SpaceX, one of the leading
              companies in the aerospace industry. Whether you&apos;re a space
              enthusiast or just curious about SpaceX&apos;s missions and
              achievements, our platform is here to assist you.
            </p>
            <h2 className="text-3xl font-bold leading-loose">Features</h2>
            <ul className="pl-8 list-disc">
              <li>
                <strong>Responsive Design:</strong> Enjoy a seamless experience
                on various devices, from desktops to mobile phones.
              </li>
              <li>
                <strong>No Sign-Up Required:</strong> Start exploring SpaceX
                data immediately without the need for registration.
              </li>
              <li>
                <strong>Reduced Network Requests:</strong> Our optimized
                platform minimizes unnecessary network requests, ensuring faster
                load times and efficient data retrieval.
              </li>
              <li>
                <strong>More Features:</strong> Stay tuned for additional
                features coming soon!
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
