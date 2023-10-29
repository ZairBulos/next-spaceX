"use client";
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
          <ul className="text-sm text-gray-300">
            <li>
              <strong>Orbit:</strong>
              <span className="ms-1">{payload.orbit}</span>
            </li>
            <li>
              <strong>Customers:</strong>
              <span className="ms-1">{payload.customers.join(", ")}</span>
            </li>
            <li>
              <strong>Manufacturers:</strong>
              <span className="ms-1">{payload.manufacturers.join(", ")}</span>
            </li>
            <li>
              <strong>Nationalities:</strong>
              <span className="ms-1">{payload.nationalities.join(", ")}</span>
            </li>
          </ul>
        </CardBody>
      </Card>
    </MotionCard>
  );
}

export default PayloadCard;
