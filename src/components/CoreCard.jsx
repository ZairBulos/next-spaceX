import React from "react";
import MotionCard from "./MotionCard";
import { Card, CardBody } from "@nextui-org/react";

function CoreCard({ core }) {

  const statusColors = {
    lost: "text-red-500",
    active: "text-green-500",
    inactive: "text-gray-500",
    expended: "text-yellow-500",
  };

  const getStatusColor = (status) => statusColors[status];

  return (
    <MotionCard>
      <Card className="min-h-min md:h-80 lg:h-72">
        <CardBody>
          <h5 className="text-2xl font-semibold leading-loose">
            {core.serial}
          </h5>
          <p className="mb-2">
            <b>Status:</b>{" "}
            <span className={`capitalize ${getStatusColor(core.status)}`}> 
              {core.status}
            </span>
          </p>
          <p className="mb-2">
            <b>Last update:</b>{" "}
            <span className="text-justify text-gray-300">
              {core.last_update ? core.last_update : "Not Available"}
            </span>
          </p>
          <p>
            <b>Launches:</b>{" "}
            <span className="text-gray-300">
              {core.launches.length}
            </span>
          </p>
        </CardBody>
      </Card>
    </MotionCard>
  );
}

export default CoreCard;
