import React from "react";
import Link from "next/link";
import MotionCard from "./MotionCard";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";

function DragonCard({ dragon }) {
  return (
    <MotionCard>
      <Card className="max-w-lg h-full mx-auto">
        <Image
          src={dragon.flickr_images[2]}
          alt={dragon.name}
          title={dragon.name}
          className="h-64 lg:h-80 w-[600px] object-cover rounded-none"
        />
        <CardFooter class="p-4">
          <h2 className="text-2xl font-bold mb-2">{dragon.name}</h2>
          <p className="text-sm text-gray-300 mb-4">
            {dragon.description.substring(0, 150)}...
          </p>
          <Button 
            as={Link}
            href={`/search/dragons/${dragon.id}`}
            variant="ghost"
          >
            Learn more
          </Button>
        </CardFooter>
      </Card>
    </MotionCard>
  );
}

export default DragonCard;
