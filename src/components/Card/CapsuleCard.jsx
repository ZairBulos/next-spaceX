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
      <Card className="h-64">
        <CardBody>
          <h2 className="text-xl font-semibold leading-loose">
            {capsule.type},
            <span className="text-lg text-white/80 ms-1">{capsule.serial}</span>
          </h2>
          <p className="text-sm">
            <b className="mr-1 mb-1">Status:</b>
            <span className={`${getStatusColor(capsule.status)} capitalize`}>
              {capsule.status}
            </span>
          </p>
          <p className="text-sm mb-1">
            <b className="mr-1">Launches:</b>
            <span className="text-gray-300">{capsule.launches.length}</span>
          </p>
          <p className="text-sm mb-1">
            <b className="mr-1">Water landings:</b>
            <span className="text-gray-300">{capsule.water_landings}</span>
          </p>
          <p className="text-sm mb-1">
            <b className="mr-1">Land landings:</b>
            <span className="text-gray-300">{capsule.land_landings}</span>
          </p>
          <p className="text-sm">
            <b className="mr-1">Last update:</b>
            <span className="text-gray-300 text-justify">
              {capsule.last_update}
            </span>
          </p>
        </CardBody>
      </Card>
    </MotionCard>
  );
}

export default CapsuleCard;
