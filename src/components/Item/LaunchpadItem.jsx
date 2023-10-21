import { Image } from "@nextui-org/react";
import React from "react";

function LaunchpadItem({ launchpad }) {
  const statusColors = {
    "retired": "text-red-500",
    "active": "text-green-500",
    "under construction": "text-yellow-500",
  };

  const getStatusColor = (success) => statusColors[success];

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 lg:py-10 lg:gap-8">
      <div className="lg:col-span-6">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">
          {launchpad.full_name}, {launchpad.name}
        </h1>
        <h2 className="text-lg lg:text-xl mb-4 text-gray-300">
          {launchpad.locality}, {launchpad.region}
        </h2>
        <p className="mb-2 text-sm lg:text-base">
          <b className="mr-1">Status:</b>
          <span className={`capitalize ${getStatusColor(launchpad.status)}`}>
            {launchpad.status}
          </span>
        </p>
        <p className="mb-2 text-sm lg:text-base">
          <b className="mr-1">{launchpad.launch_attempts}</b>
          <span className="text-gray-300">Launch Attempts</span>
        </p>
        <p className="mb-4 text-sm lg:text-base">
          <b className="mr-1">{launchpad.launch_successes}</b>
          <span className="text-gray-300">Launch Successes</span>
        </p>
        <p className="text-sm lg:text-base text-gray-300">
          {launchpad.details}
        </p>
      </div>
      <div className="lg:col-span-6 lg:mt-0 mt-4">
        <Image src={launchpad.images.large[0]} alt={launchpad.name} />
      </div>
    </article>
  );
}

export default LaunchpadItem;
