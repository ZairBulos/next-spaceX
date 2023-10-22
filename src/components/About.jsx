import React from "react";
import BrandX from "@/assets/brand-x";
import WorldWWW from "@/assets/world-www";
import BrandFlickr from "@/assets/brand-flickr";
import BrandInstagram from "@/assets/brand-instagram";

function About() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl py-8 px-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">
          All SpaceX Info In One Place
        </h2>

        {/* Section: About */}
        <section className="grid grid-cols-1 lg:grid-cols-12 py-8 border-b border-gray-500">
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start">
            <h3 className="text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
              About
            </h3>
          </div>
          <div className="lg:col-span-6">
            <p className="lg:text-lg text-justify">
              SpaceX designs, manufactures and launches advanced rockets and
              spacecraft. The company was founded in 2002 to revolutionize space
              technology, with the ultimate goal of enabling people to live on
              other planets.
            </p>
          </div>
        </section>

        {/* Section: Information */}
        <section className="grid grid-cols-1 lg:grid-cols-12 py-8 border-b border-gray-500">
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start">
            <h3 className="text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
              Information
            </h3>
          </div>
          <div className="lg:col-span-6">
            <ul className="lg:text-lg">
              <li>3 test sites</li>
              <li>4 launch sites</li>
              <li>4 space vehicles</li>
              <li>Has 9500 employees</li>
              <li>Valued at 74.000.000.000 USD</li>
              <li>Located in Rocket Road, Hawthorne, California</li>
            </ul>
          </div>
        </section>

        {/* Section: Social Media */}
        <section className="grid grid-cols-1 lg:grid-cols-12 py-8">
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start">
            <h3 className="text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
              Social Media
            </h3>
          </div>
          <div className="lg:col-span-6">
            <ul className="lg:text-lg">
              <li className="flex items-center gap-2">
                <BrandFlickr />{" "}
                <a
                  href="https://www.flickr.com/photos/spacex/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  Flickr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <BrandX />
                <a
                  href="https://twitter.com/SpaceX/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  Twitter
                </a>
              </li>
              <li className="flex items-center gap-2">
                <WorldWWW />
                <a
                  href="https://www.spacex.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  Website
                </a>
              </li>
              <li className="flex items-center gap-2">
                <BrandInstagram />
                <a
                  href="https://www.instagram.com/spacex/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
