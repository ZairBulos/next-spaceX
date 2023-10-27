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
          <h2 className="text-lg lg:text-xl font-semibold mb-2">
            {capsule.type},
            <span className="lg:text-lg text-white/80 ms-1">
              {capsule.serial}
            </span>
          </h2>
          <ul className="text-sm text-gray-300">
            <li>
              <strong>Status:</strong>
              <span className={`ms-1 capitalize ${getStatusColor(capsule.status)}`}>
                {capsule.status}
              </span>
            </li>
            <li>
              <strong>Launches:</strong>
              <span className="ms-1">{capsule.launches.length}</span>
            </li>
            <li>
              <strong>Land landings:</strong>
              <span className="ms-1">{capsule.land_landings}</span>
            </li>
            <li>
              <strong>Water landings:</strong>
              <span className="ms-1">{capsule.water_landings}</span>
            </li>
            <li>
              <strong>Last update:</strong>
              <span className="ms-1">{capsule.last_update}</span>
            </li>
          </ul>
        </CardBody>
      </Card>
    </MotionCard>
  );
}

export default CapsuleCard;
