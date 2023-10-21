import React from "react";
import Link from "next/link";
import MotionCard from "./MotionCard";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";

function LandpadCard({ landpad }) {
  return (
    <MotionCard>
      <Card className="max-w-lg h-full mx-auto">
        <Image
          src={landpad.images.large[0]}
          alt={landpad.name}
          className="h-64 lg:h-80 w-[600px] object-cover rounded-none"
        />
        <CardFooter class="p-4">
          <h2 className="text-2xl font-bold mb-2">{landpad.full_name}</h2>
          <p className="text-sm text-gray-300 mb-4">
            {landpad.details.substring(0, 100)}...
          </p>
          <Button 
            as={Link}
            href={`/search/landpads/${landpad.id}`}
            variant="ghost"
          >
            Learn more
          </Button>
        </CardFooter>
      </Card>
    </MotionCard>
  );
}

export default LandpadCard;