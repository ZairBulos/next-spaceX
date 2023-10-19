"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Image } from "@nextui-org/react";
import BrandX from "@/assets/brand-x";
import BrandFlickr from "@/assets/brand-flickr";
import WorldWWW from "@/assets/world-www";

function Home() {
  return (
    <>
      <Head>
        <title>Next SpaceX</title>
      </Head>
      <main className="bg-gradient-to-b from-gray-950/5 via-gray-900/75 to-black">
        <section className="flex items-center min-h-[88vh]">
          <div className="grid lg:grid-cols-12 mx-auto max-w-screen-xl py-8 px-4 lg:gap-8 lg:py-20">
            <div className="lg:col-span-6 mr-auto place-self-center">
              <h1 className="text-4xl lg:text-6xl max-w-2xl font-bold mb-4">
                Next SpaceX
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 font-semibold mb-4">
                Where Space Meets Innovation
              </p>
              <Button
                as={Link}
                size="lg"
                href="/about"
                variant="shadow"
                className="bg-gradient-to-tr from-sky-400 to-purple-800 hover:from-purple-800 hover:to-sky-400"
              >
                Explore
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="hidden lg:col-span-6 lg:flex"
            >
              <Image
                src="/capsule.png"
                alt="Capsule Of SpaceX"
                className="w-full capsule"
              />
            </motion.div>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-screen-xl py-8 px-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">
              All SpaceX Info In One Place
            </h2>

            <article className="grid grid-cols-1 lg:grid-cols-12 py-8 border-b border-gray-500">
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-start">
                <h3 className="text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
                  About
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="lg:text-lg text-justify">
                  SpaceX designs, manufactures and launches advanced rockets and
                  spacecraft. The company was founded in 2002 to revolutionize
                  space technology, with the ultimate goal of enabling people to
                  live on other planets.
                </p>
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-12 py-8 border-b border-gray-500">
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-start">
                <h3 className="text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
                  Information
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="lg:text-lg mb-2">3 test sites</p>
                <p className="lg:text-lg mb-2">4 launch site</p>
                <p className="lg:text-lg mb-2">4 space vehicles</p>
                <p className="lg:text-lg mb-2">Has 9500 employees</p>
                <p className="lg:text-lg mb-2">Valued at $ 74.000.000.000</p>
                <p className="lg:text-lg">
                  <span className="mr-1">Located in</span>
                  <a
                    href="https://maps.app.goo.gl/Z5k7DVDbye9onAWe6"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline underline-offset-2"
                  >
                    Rocket Road, Hawthorne, California
                  </a>
                </p>
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-12 py-8">
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-start">
                <h3 className="text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
                  Social Media
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="flex gap-4 mb-2">
                  <span>
                    <BrandFlickr />{" "}
                  </span>
                  <a
                    href="https://www.flickr.com/photos/spacex/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline underline-offset-2"
                  >
                    Flickr
                  </a>
                </p>
                <p className="flex gap-4 mb-2">
                  <span>
                    <BrandX />
                  </span>
                  <a
                    href="https://twitter.com/SpaceX"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline underline-offset-2"
                  >
                    Twitter
                  </a>
                </p>
                <p className="flex gap-4">
                  <span>
                    <WorldWWW />
                  </span>
                  <a
                    href="https://www.spacex.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline underline-offset-2"
                  >
                    Website
                  </a>
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
