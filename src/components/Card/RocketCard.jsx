import React from "react";
import Link from "next/link";
import MotionCard from "./MotionCard";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";

function RocketCard({ rocket }) {
  return (
    <MotionCard>
      <Card className="max-w-lg h-full mx-auto">
        <Image
          src={rocket.flickr_images[1]}
          alt={rocket.name}
          title={`Rocket ${rocket.name}`}
          className="h-64 lg:h-80 w-[600px] object-cover rounded-none"
        />
        <CardFooter class="p-4">
          <h2 className="text-2xl font-bold mb-2">{rocket.name}</h2>
          <p className="text-sm text-gray-300 mb-4">
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
