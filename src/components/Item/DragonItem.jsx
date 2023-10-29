"use client";
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
        <h2 className="text-lg lg:text-xl text-gray-300 mb-4">
          <strong>First Flight:</strong> {formatDate(dragon.first_flight)}
        </h2>

        {/* First Column: Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 mb-2">
            <ul className="text-sm lg:text-base text-gray-300">
              <li>
                <strong>Status:</strong>
                <span className={`ms-1 ${getStatusColor(dragon.active)}`}>
                  {dragon.active ? "Active" : "Inactive"}
                </span>
              </li>
              <li>
                <strong>Type:</strong>
                <span className="ms-1 capitalize">{dragon.type}</span>
              </li>
              <li>
                <strong>Crew Capacity:</strong>
                <span className="ms-1">{dragon.crew_capacity}</span>
              </li>
              <li>
                <strong>Orbit Duration:</strong>
                <span className="ms-1">{dragon.orbit_duration_yr} years</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 mb-2">
            <aside className="bg-gray-900 p-2 lg:p-4 rounded-md">
              <h3 className="lg:text-lg font-bold">Heat Shield</h3>
              <ul className="text-sm lg:text-base text-gray-300">
                <li>
                  <strong>Size:</strong>
                  <span className="ms-1">
                    {dragon.heat_shield.size_meters} m
                  </span>
                </li>
                <li>
                  <strong>Material:</strong>
                  <span className="ms-1">{dragon.heat_shield.material}</span>
                </li>
                <li>
                  <strong>Temperature:</strong>
                  <span className="ms-1">
                    {dragon.heat_shield.temp_degrees} degrees
                  </span>
                </li>
                <li>
                  <strong>Dev Partner:</strong>
                  <span className="ms-1">{dragon.heat_shield.dev_partner}</span>
                </li>
              </ul>
            </aside>
          </div>

          <div className="lg:col-span-1 mb-2">
            <ul className="text-sm lg:text-base text-gray-300">
              <li>
                <strong>Launch Payload Mass:</strong>
                <span className="ms-1">
                  {imperial ? (
                    <>{dragon.launch_payload_mass.lb} lb</>
                  ) : (
                    <>{dragon.launch_payload_mass.kg} kg</>
                  )}
                </span>
              </li>
              <li>
                <strong>Return Payload Mass:</strong>
                <span className="ms-1">
                  {imperial ? (
                    <>{dragon.return_payload_mass.lb} lb</>
                  ) : (
                    <>{dragon.return_payload_mass.kg} kg</>
                  )}
                </span>
              </li>
              <li>
                <strong>Height With Trunk:</strong>
                <span className="ms-1">
                  {imperial ? (
                    <>{dragon.height_w_trunk.feet} ft</>
                  ) : (
                    <>{dragon.height_w_trunk.meters} m</>
                  )}
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <ul className="text-sm lg:text-base text-gray-300">
              <li>
                <strong>Launch Payload Vol:</strong>
                <span className="ms-1">
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
              </li>
              <li>
                <strong>Return Payload Mass:</strong>
                <span className="ms-1">
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
              </li>
              <li>
                <strong>Diameter:</strong>
                <span className="ms-1">
                  {imperial ? (
                    <>{dragon.diameter.feet} ft</>
                  ) : (
                    <>{dragon.diameter.meters} m</>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm lg:text-base text-gray-300 mt-4">
          {dragon.description}
        </p>

        <div className="flex gap-4 mt-4">
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

      {/* Second Column: Image */}
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
                className={`h-16 w-16 ${
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
