import React from "react";
import MotionCard from "./MotionCard";
import { Card, CardBody } from "@nextui-org/react";

function PayloadCard({ payload }) {
  return (
    <MotionCard>
      <Card className="h-64">
        <CardBody>
          <h2 className="text-xl font-bold leading-loose">
            {payload.name},
            <span className="text-lg text-white/80 ms-1">{payload.type}</span>
          </h2>
          <p className="text-sm mb-1">
            <b className="mr-1">Orbit:</b>
            <span className="text-gray-300">{payload.orbit}</span>
          </p>
          <p className="text-sm mb-1">
            <b className="mr-1">Customers:</b>
            <span className="text-gray-300">
              {payload.customers.join(", ")}
            </span>
          </p>
          <p className="text-sm mb-1">
            <b className="mr-1">Manufacturers:</b>
            <span className="text-gray-300">
              {payload.manufacturers.join(", ")}
            </span>
          </p>
          <p className="text-sm">
            <b className="mr-1">Nationalities:</b>
            <span className="text-gray-300">
              {payload.nationalities.join(", ")}
            </span>
          </p>
        </CardBody>
      </Card>
    </MotionCard>
  );
}

export default PayloadCard;
