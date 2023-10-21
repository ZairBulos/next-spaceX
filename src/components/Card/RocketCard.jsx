import React from "react";
import Link from "next/link";
import MotionCard from "./MotionCard";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";

function RocketCard({ rocket }) {
  return (
    <MotionCard>
      <Card className="max-w-md h-full mx-auto">
        <Image
          src={rocket.flickr_images[1]}
          alt={rocket.name}
          className="h-full lg:h-80 w-full object-cover"
        />
        <CardFooter class="p-4">
          <h2 className="text-2xl font-bold mb-2">{rocket.name}</h2>
          <p className="text-gray-300 mb-2">
            {rocket.description.substring(0, 100)}...
          </p>
          <Button
            as={Link}
            href={`/search/rockets/${rocket.id}`}
            variant="ghost"
          >
            Learn more
          </Button>
        </CardFooter>
      </Card>
    </MotionCard>
  );
}

export default RocketCard;
