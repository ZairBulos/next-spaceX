import React from "react";
import Link from "next/link";
import MotionCard from "./MotionCard";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function LaunchCard({ launch }) {
  return (
    <MotionCard>
      <Card radius="lg" isFooterBlurred className="border-none h-72">
        <CardBody className="flex items-center justify-center h-72 overflow-hidden">
          <Image
            src={launch.links.patch.small}
            alt={launch.name}
            title={`Launch ${launch.name}`}
            className="mx-auto"
          />
        </CardBody>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <h2 className="text-tiny font-semibold text-white/80">
            {launch.name}
          </h2>
          <Button
            as={Link}
            href={`/search/launches/${launch.id}`}
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Learn more
          </Button>
        </CardFooter>
      </Card>
    </MotionCard>
  );
}

export default LaunchCard;
