"use client";
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
          <h2 className="text-lg lg:text-xl font-semibold mb-2">
            {core.serial}
          </h2>
          <ul className="text-sm text-gray-300">
            <li>
              <strong>Status:</strong>
              <span className={`ms-1 capitalize ${getStatusColor(core.status)}`}>
                {core.status}
              </span>
            </li>
            <li>
              <strong>Launches:</strong>
              <span className="ms-1">{core.launches.length}</span>
            </li>
            <li>
              <strong>Last Update:</strong>
              <span className="ms-1">
                {core.last_update ? core.last_update : "Not Available"}
              </span>
            </li>
          </ul>
        </CardBody>
      </Card>
    </MotionCard>
  );
}

export default CoreCard;
