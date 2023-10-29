"use client";
import { Image } from "@nextui-org/react";
import React from "react";

function LaunchpadItem({ launchpad }) {
  const statusColors = {
    retired: "text-red-500",
    active: "text-green-500",
    "under construction": "text-yellow-500",
  };

  const getStatusColor = (success) => statusColors[success];

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 lg:py-10 lg:gap-8">
      {/* First Column: Information */}
      <div className="lg:col-span-6">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">
          {launchpad.full_name}, {launchpad.name}
        </h1>
        <h2 className="text-lg lg:text-xl text-gray-300 mb-4">
          {launchpad.locality}, {launchpad.region}
        </h2>

        <ul className="text-sm lg:text-base text-gray-300 mb-4">
          <li>
            <strong>Status:</strong>
            <span className={`ms-1 capitalize ${getStatusColor(launchpad.status)}`}>
              {launchpad.status}
            </span>
          </li>
          <li>
            <strong>{launchpad.launch_attempts}</strong>
            <span className="ms-1">Launch Attempts</span>
          </li>
          <li>
            <strong>{launchpad.launch_successes}</strong>
            <span className="ms-1">Launch Successes</span>
          </li>
        </ul>

        <p className="text-sm lg:text-base text-gray-300">
          {launchpad.details}
        </p>
      </div>

      {/* Second Column: Image */}
      <div className="lg:col-span-6 lg:mt-0 mt-4">
        <Image src={launchpad.images.large[0]} alt={launchpad.name} />
      </div>
    </article>
  );
}

export default LaunchpadItem;
