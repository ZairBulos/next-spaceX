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
      {/* First Colum: Information */}
      <div className="lg:col-span-6">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">{rocket.name}</h1>
        <h2 className="text-lg lg:text-xl text-gray-300 mb-4">
          <strong>First Flight:</strong> {formatDate(rocket.first_flight)}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:col-span-1">
            <ul className="text-sm lg:text-base text-gray-300">
              <li>
                <strong>Status:</strong>
                <span
                  className={`ms-1 selection:${getStatusColor(rocket.active)}`}
                >
                  {rocket.active ? "Active" : "Inactive"}
                </span>
              </li>
              <li>
                <strong>Success Rate:</strong>
                <span className="ms-1">{rocket.success_rate_pct}%</span>
              </li>
              <li>
                <strong>Country:</strong>
                <span className="ms-1">{rocket.country}</span>
              </li>
              <li>
                <strong>Cost per launch:</strong>
                <span className="ms-1">
                  {rocket.cost_per_launch.toLocaleString()} USD
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <ul className="text-sm lg:text-base text-gray-300">
              <li>
                <strong>Stages:</strong>
                <span className="ms-1">{rocket.stages}</span>
              </li>
              <li>
                <strong>Height:</strong>
                <span className="ms-1">
                  {imperial ? (
                    <>{rocket.height.feet} ft</>
                  ) : (
                    <>{rocket.height.meters} m</>
                  )}
                </span>
              </li>
              <li>
                <strong>Diameter:</strong>
                <span className="ms-1">
                  {imperial ? (
                    <>{rocket.diameter.feet} ft</>
                  ) : (
                    <>{rocket.diameter.meters} m</>
                  )}
                </span>
              </li>
              <li>
                <strong>Mass:</strong>
                <span className="ms-1">
                  {imperial ? (
                    <>{rocket.mass.lb.toLocaleString()} lb</>
                  ) : (
                    <>{rocket.mass.kg.toLocaleString()} kg</>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm lg:text-base text-gray-300 mt-4">
          {rocket.description}
        </p>

        <div className="flex gap-4 mt-4">
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

      {/* Second Colum: Image */}
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
