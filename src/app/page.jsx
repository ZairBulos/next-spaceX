"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

function Home() {
  return (
    <>
      <Head>
        <title>Next SpaceX</title>
      </Head>
      <main className="container p-10">
        <section className="min-h-[88vh] flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12"
          >
            <div className="place-self-center mr-auto lg:col-span-7">
              <h1 className="mb-4 text-4xl md:text-5xl xl:text-6xl leading-none max-w-2xl">
                Next SpaceX
              </h1>
              <p className="mb-6 max-w-2xl font-lighttext-gray-500 md:tracking-wider lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Where Space Meets Innovation
              </p>
              <Button
                href="/get-started"
                as={Link}
                size="lg"
                className="bg-gradient-to-tr from-sky-500 to-blue-950 text-white shadow-lg mr-4"
              >
                Get Started
              </Button>
              <Button
                as={Link}
                size="lg"
                variant="ghost"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ZairBulos/spaceX"
              >
                Source Code
              </Button>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src="/capsule.png"
                width={400}
                height={400}
                loading="lazy"
                alt="Capsule of SpaceX"
                className="w-full capsule"
              />
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

export default Home;
