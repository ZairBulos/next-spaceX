import React, { useState } from "react";
import { format } from "date-fns";
import { Button, Image, Link } from "@nextui-org/react";

function RocketItem({ rocket }) {
  const [mainImg, setMainImg] = useState(0);
  const [imperial, setImperial] = useState(false);

  if (!rocket) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "d MMMM yyyy");
  };

  const statusColors = {
    false: "text-red-500",
    true: "text-green-500",
  };

  const getStatusColor = (success) => statusColors[success];

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 lg:py-10 lg:gap-8">
      <div className="lg:col-span-6">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">{rocket.name}</h1>
        <h2 className="text-lg lg:text-xl mb-4 text-gray-300">
          First Flight: {formatDate(rocket.first_flight)}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:col-span-1">
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Status:</b>
              <span className={getStatusColor(rocket.active)}>
                {rocket.active ? "Active" : "Inactive"}
              </span>
            </p>
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Success Rate:</b>
              <span className="text-gray-300">{rocket.success_rate_pct}%</span>
            </p>
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Country:</b>
              <span className="text-gray-300">{rocket.country}</span>
            </p>
            <p className="mb-4 text-sm lg:text-base">
              <b className="mr-1">Cost per launch:</b>
              <span className="text-gray-300">
                {rocket.cost_per_launch.toLocaleString()} USD
              </span>
            </p>
          </div>

          <div className="lg:col-span-1">
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Stages:</b>
              <span className="text-gray-300">{rocket.stages}</span>
            </p>
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Height:</b>
              <span className="text-gray-300">
                {imperial ? (
                  <>{rocket.height.feet} ft</>
                ) : (
                  <>{rocket.height.meters} m</>
                )}
              </span>
            </p>
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Diameter:</b>
              <span className="text-gray-300">
                {imperial ? (
                  <>{rocket.diameter.feet} ft</>
                ) : (
                  <>{rocket.diameter.meters} m</>
                )}
              </span>
            </p>
            <p className="mb-4 text-sm lg:text-base">
              <b className="mr-1">Mass:</b>
              <span className="text-gray-300">
                {imperial ? (
                  <>{rocket.mass.lb.toLocaleString()} lb</>
                ) : (
                  <>{rocket.mass.kg.toLocaleString()} kg</>
                )}
              </span>
            </p>
          </div>
        </div>
        <p className="mb-4 text-sm lg:text-base text-gray-300">
          {rocket.description}
        </p>
        <div className="flex gap-4">
          <Button
            as={Link}
            variant="ghost"
            rel="noreferrer"
            target="_blank"
            href={rocket.wikipedia}
          >
            Wikipedia
          </Button>
          <Button variant="faded" onClick={() => setImperial(!imperial)}>
            {imperial ? "Toggle Metric Units" : "Toggle Imperial Units"}
          </Button>
        </div>
      </div>
      <div className="lg:col-span-6 lg:mt-0 mt-4">
        <Image
          src={rocket.flickr_images[mainImg]}
          alt={rocket.name}
          className="h-[60vh] w-[100vh] object-cover"
        />

        <ul className="flex flex-wrap items-center justify-start gap-4 mt-2">
          {rocket.flickr_images.map((img, idx) => (
            <li
              key={img}
              onClick={() => setMainImg(idx)}
              className="cursor-pointer"
            >
              <Image
                src={img}
                alt={rocket.name}
                className={`w-20 ${
                  idx === mainImg ? "border-2 border-white" : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default RocketItem;
