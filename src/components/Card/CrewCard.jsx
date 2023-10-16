import React from "react";
import MotionCard from "./MotionCard";
import { Card, CardFooter, Image, Button, Link } from "@nextui-org/react";

function CrewCard({ member }) {
  return (
    <MotionCard>
      <Card radius="lg" isFooterBlurred className="border-none h-72">
        <Image src={member.image} alt={member.name} className="h-full w-full" />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny font-semibold text-white/80">{member.name}</p>
          <Button
            as={Link}
            href={member.wikipedia}
            target="_blank"
            rel="noreferrer"
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Wikipedia
          </Button>
        </CardFooter>
      </Card>
    </MotionCard>
  );
}

export default CrewCard;
