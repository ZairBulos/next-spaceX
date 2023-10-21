import React, { useState } from "react";
import { format } from "date-fns";
import { Button, Image, Link } from "@nextui-org/react";

function DragonItem({ dragon }) {
  const [mainImg, setMainImg] = useState(0);
  const [imperial, setImperial] = useState(false);

  if (!dragon) return null;

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
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">{dragon.name}</h1>
        <h2 className="text-lg lg:text-xl mb-4 text-gray-300">
          First Flight: {formatDate(dragon.first_flight)}
        </h2>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Status:</b>
              <span className={getStatusColor(dragon.active)}>
                {dragon.active ? "Active" : "Inactive"}
              </span>
            </p>
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Type:</b>
              <span className="capitalize text-gray-300">{dragon.type}</span>
            </p>
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Crew Capacity:</b>
              <span className="text-gray-300">{dragon.crew_capacity}</span>
            </p>
            <p className="mb-4 text-sm lg:text-base">
              <b className="mr-1">Orbit Duration:</b>
              <span className="text-gray-300">
                {dragon.orbit_duration_yr} years
              </span>
            </p>
          </div>
          <div className="col-span-1">
            <div className="bg-gray-800 p-4 mb-4 rounded-lg">
              <h3 className="lg:text-lg font-bold uppercase">Heat Shield</h3>
              <p className="text-sm lg:text-base text-gray-300">
                Size: {dragon.heat_shield.size_meters} m
              </p>
              <p className="text-sm lg:text-base text-gray-300">
                Material: {dragon.heat_shield.material}
              </p>
              <p className="text-sm lg:text-base text-gray-300">
                Temperature: {dragon.heat_shield.temp_degrees}
              </p>
              <p className="text-sm lg:text-base text-gray-300">
                Dev Partner: {dragon.heat_shield.dev_partner}
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Launch Payload Mass:</b>
              <span className="text-gray-300">
                {imperial ? (
                  <>{dragon.launch_payload_mass.lb} lb</>
                ) : (
                  <>{dragon.launch_payload_mass.kg} kg</>
                )}
              </span>
            </p>
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Return Payload Mass:</b>
              <span className="text-gray-300">
                {imperial ? (
                  <>{dragon.return_payload_mass.lb} lb</>
                ) : (
                  <>{dragon.return_payload_mass.kg} kg</>
                )}
              </span>
            </p>
            <p className="mb-4 text-sm lg:text-base">
              <b className="mr-1">Height With Trunk:</b>
              <span className="text-gray-300">
                {imperial ? (
                  <>{dragon.height_w_trunk.feet} ft</>
                ) : (
                  <>{dragon.height_w_trunk.meters} m</>
                )}
              </span>
            </p>
          </div>

          <div className="lg:col-span-1">
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Launch Payload Vol:</b>
              <span className="text-gray-300">
                {imperial ? (
                  <>
                    {dragon.launch_payload_vol.cubic_feet} ft<sup>3</sup>
                  </>
                ) : (
                  <>
                    {dragon.launch_payload_vol.cubic_meters} m<sup>3</sup>
                  </>
                )}
              </span>
            </p>
            <p className="mb-2 text-sm lg:text-base">
              <b className="mr-1">Return Payload Mass:</b>
              <span className="text-gray-300">
                {imperial ? (
                  <>
                    {dragon.return_payload_vol.cubic_feet} ft<sup>3</sup>
                  </>
                ) : (
                  <>
                    {dragon.return_payload_vol.cubic_meters} m<sup>3</sup>
                  </>
                )}
              </span>
            </p>
            <p className="mb-4 text-sm lg:text-base">
              <b className="mr-1">Diameter:</b>
              <span className="text-gray-300">
                {imperial ? (
                  <>{dragon.diameter.feet} ft</>
                ) : (
                  <>{dragon.diameter.meters} m</>
                )}
              </span>
            </p>
          </div>
        </div>
        <p className="mb-4 text-sm lg:text-base">{dragon.description}</p>
        <div className="flex gap-4">
          <Button
            as={Link}
            variant="ghost"
            rel="noreferrer"
            target="_blank"
            href={dragon.wikipedia}
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
          src={dragon.flickr_images[mainImg]}
          alt={dragon.name}
          className="h-[70vh] w-[100vh] object-cover"
        />

        <ul className="flex flex-wrap items-center justify-start gap-4 mt-2">
          {dragon.flickr_images.map((img, idx) => (
            <li
              key={img}
              onClick={() => setMainImg(idx)}
              className="cursor-pointer"
            >
              <Image
                src={img}
                alt={dragon.name}
                className={`h-16 ${
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

export default DragonItem;
