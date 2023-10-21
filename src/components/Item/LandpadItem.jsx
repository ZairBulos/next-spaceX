import React from "react";
import { Button, Image, Link } from "@nextui-org/react";

function LandpadItem({ landpad }) {
  if (!landpad) return null;

  const statusColors = {
    "retired": "text-red-500",
    "active": "text-green-500",
  };

  const getStatusColor = (success) => statusColors[success];

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 lg:py-10 lg:gap-8">
      <div className="lg:col-span-6">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">
          {landpad.full_name}, {landpad.name}
        </h1>
        <h2 className="text-lg lg:text-xl mb-4 text-gray-300">
          {landpad.locality}, {landpad.region}
        </h2>
        <p className="mb-2 text-sm lg:text-base">
          <b className="mr-1">Status:</b>
          <span className={`capitalize ${getStatusColor(landpad.status)}`}>
            {landpad.status}
          </span>
        </p>
        <p className="mb-2 text-sm lg:text-base">
          <b className="mr-1">{landpad.landing_attempts}</b>
          <span className="text-gray-300">Landing Attempts</span>
        </p>
        <p className="mb-4 text-sm lg:text-base">
          <b className="mr-1">{landpad.landing_successes}</b>
          <span className="text-gray-300">Landing Successes</span>
        </p>
        <p className="mb-4 text-sm lg:text-base text-gray-300">
          {landpad.details}
        </p>
        <Button 
          as={Link} 
          href={landpad.wikipedia}
          target="_blank"
          rel="noreferrer" 
          variant="ghost"
        >
          Wikipedia
        </Button>
      </div>
      <div className="lg:col-span-6 lg:mt-0 mt-4">
        <Image 
          src={landpad.images.large[0]}
          alt={landpad.name}
          className=""
        />
      </div>
    </article>
  );
}

export default LandpadItem;
