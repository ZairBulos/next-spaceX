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
      <Card className="h-64">
        <CardBody>
          <h2 className="text-xl font-semibold leading-loose">{core.serial}</h2>
          <p className="text-sm mb-1">
            <b className="mr-1">Status:</b>
            <span className={`${getStatusColor(core.status)} capitalize`}>{core.status}</span>
          </p>
          <p className="text-sm mb-1">
            <b className="mr-1">Launches:</b>
            <span className="text-gray-300">{core.launches.length}</span>
          </p>
          <p className="text-sm mb-1">
            <b className="mr-1">Last Update:</b>
            <span className="text-gray-300 text-justify">{core.last_update ? core.last_update : "Not Available"}</span>
          </p>
        </CardBody>
      </Card>
    </MotionCard>
  );
}

export default CoreCard;
