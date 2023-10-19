import React from "react";
import Link from "next/link";
import SpaceXLogo from "./SpaceXLogo";

function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <SpaceXLogo width={200} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Next.js
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://nextui.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    NextUI
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Contact
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="mailto:buloszair@gmail.com"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Email
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/ZairBulos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/zair-bulos/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                More
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/ZairBulos/spaceX"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.spacex.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    SpaceX Classical
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2023 Zair Bulos. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
