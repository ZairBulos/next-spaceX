import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Image } from "@nextui-org/react";

function Hero() {
  return (
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
            alt="Capsule of SpaceX"
            className="w-full capsule"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
