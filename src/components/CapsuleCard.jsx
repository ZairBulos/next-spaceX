import React from "react";
import MotionCard from "./MotionCard";
import { Card, CardBody } from "@nextui-org/react";

function CapsuleCard({ capsule }) {

  const statusColors = {
    retired: "text-yellow-500",
    unknown: "text-gray-500",
    active: "text-green-500",
    destroyed: "text-red-500",
  };

  const getStatusColor = (status) => statusColors[status];

  return (
    <MotionCard>
      <Card className="min-h-min md:h-80 lg:h-72">
        <CardBody>
          <h5 className="text-2xl font-semibold leading-loose">
            {capsule.serial}
          </h5>
          <p className="mb-2">
            <b>Status:</b>{" "}
            <span className={`capitalize ${getStatusColor(capsule.status)}`}>
              {capsule.status}
            </span>
          </p>
          <p className="mb-2"> 
            <b>Last update:</b>{" "}
            <span className="text-justify text-gray-300">
              {capsule.last_update ? capsule.last_update : "Not Available"}
            </span>
          </p>
          <p className="mb-2">
            <b>Launches:</b>{" "}
            <span className="text-gray-300">
              {capsule.launches.length}
            </span>
          </p>
          <p>
            <b>Type:</b>{" "}
            <span className="text-gray-300">
              {capsule.type}
            </span>
          </p>
        </CardBody>
      </Card>
    </MotionCard>
  );
}

export default CapsuleCard;